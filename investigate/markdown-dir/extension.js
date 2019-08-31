'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias 'vscode'
import { commands, window, workspace, Position, Range } from "vscode";
import { readFile, writeFile, readdirSync, statSync, existsSync } from "fs";
import { platform } from "os";


// this method is called when your extension is activated,
// that is, the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic info (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "markdown-dir" is now active!');
    // create a MarkdownDirTools
    let markdownDirTools = new MarkdownDirTools();
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable_createMarkdownDir = commands.registerCommand('extension.createMarkdownDir', () => { markdownDirTools.create(); });
    let disposable_updateMarkdownDir = commands.registerCommand('extension.updateMarkdownDir', () => { markdownDirTools.update(); });
    let disposable_deleteMarkdownDir = commands.registerCommand('extension.deleteMarkdownDir', () => { markdownDirTools.delete(); });
    let disposable_updateAllMarkdownDir = commands.registerCommand('extension.updateAllMarkdownDir', () => { markdownDirTools.updateAll(); });

    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(disposable_createMarkdownDir);
    context.subscriptions.push(disposable_updateMarkdownDir);
    context.subscriptions.push(disposable_deleteMarkdownDir);
    context.subscriptions.push(disposable_updateAllMarkdownDir);
}



const _activate = activate;
export { _activate as activate };
const REGEXP_DIR_START = /\s*<!--(.*)DIR(.*)-->/gi;
const REGEXP_DIR_STOP = /\s*<!--(.*)\/DIR(.*)-->/gi;
const REGEXP_DIR_ALL = /<!--(.*)DIR(.*)-->[\s\S]*<!--(.*)\/DIR(.*)-->/gi;


class MarkdownDirTools {
    create() {
        this.update();
    }

    update() {
        this.updateDefaultFileNames();
        let editor = window.activeTextEditor;
        window.activeTextEditor.edit((editBuilder) => {
            let dirRange = this.getDirRange();
            let insertPosition = editor.selection.active;
            // delete last insert
            if (dirRange != null) {
                insertPosition = dirRange.start;
                editBuilder.delete(dirRange);
            }
            let parentDirListing = this.getParentDirListing();
            let dirListing = this.getCurrentDirListing();
            console.log(dirListing);
            this.updateDirInEditor(editBuilder, [parentDirListing, dirListing], insertPosition);
        });
    }

    updateAll() {
        window.showInformationMessage('Updating All DIR listings ...');
        this.updateDefaultFileNames();
        let doc = window.activeTextEditor.document;
        let filePath = doc.uri.path;
        let parentFileListing;
        let highestMatchingDirPath;
        let foundMdFile;
        do {
            highestMatchingDirPath = filePath;
            parentFileListing = this.getAnyParentDirListing(filePath);
            let fileFragments = filePath.split('/');
            filePath = fileFragments.slice(0, fileFragments.length - 2).join('/') + '/';
            foundMdFile = parentFileListing.some((fileListing) => {
                return !fileListing.isDirectory;
            });
        } while (foundMdFile);
        // We are not at the root directory
        this.updateDir(highestMatchingDirPath, doc.uri.path);
    }

    updateDir(dirPath, currentFilePath) {
        let dirListing = this.getAnyCurrentDirListing(dirPath);
        let parentDirListing = this.getAnyParentDirListing(dirPath);
        dirListing.forEach(listing => {
            if (listing.isDirectory) {
                this.updateDir(listing.fullPath, currentFilePath);
                return;
            }
            if (listing.fullPath === currentFilePath) {
                this.update();
            }
            else {
                this.updateFile(listing.fullPath, [parentDirListing, dirListing]);
            }
        });
    }

    updateFile(filePath, dirListings) {
        if (platform() === 'win32') {
            filePath = filePath.replace('/', '');
        }
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            let dirText = this.createDir(dirListings);
            var result = data.replace(REGEXP_DIR_ALL, dirText);
            writeFile(filePath, result, 'utf8', function (err) {
                if (err)
                    return console.log(err);
            });
        });
    }

    delete(isBySave = false) {
        window.activeTextEditor.edit((editBuilder) => {
            let dirRange = this.getDirRange();
            if (dirRange == null)
                return;
            editBuilder.delete(dirRange);
        });
    }

    updateDefaultFileNames() {
        this.defaultFileNames = workspace.getConfiguration('markdown-dir').get('defaultFileNames');
    }

    getParentDirListing() {
        let doc = window.activeTextEditor.document;
        let filePath = doc.uri.path;
        return this.getAnyParentDirListing(filePath);
    }

    getAnyParentDirListing(filePath) {
        let fileFragments = filePath.split('/');
        let dirPath = fileFragments.slice(1, fileFragments.length - 2).join('/') + '/';
        return this.getDirListings(dirPath, '../');
    }

    getCurrentDirListing() {
        let doc = window.activeTextEditor.document;
        let filePath = doc.uri.path;
        return this.getAnyCurrentDirListing(filePath);
    }

    getAnyCurrentDirListing(filePath) {
        let fileFragments = filePath.split('/');
        let dirPath = fileFragments.slice(1, fileFragments.length - 1).join('/') + '/';
        let currentFileName = fileFragments.slice(fileFragments.length - 1, fileFragments.length).join('');
        return this.getDirListings(dirPath, './', currentFileName);
    }

    getDirListings(dirPath, relativePathPrefix, currentFileName) {
        let matchingFileListings = [];
        let files = readdirSync(dirPath);
        files.forEach(file => {
            let pathStat = statSync(dirPath + file);
            let filePathFragments = file.split('/');
            let fileName = filePathFragments[filePathFragments.length - 1];
            if (pathStat.isDirectory()) {
                this.defaultFileNames.some((defaultFileName) => {
                    let childIndexFileExists = existsSync(dirPath + file + '/' + defaultFileName);
                    if (childIndexFileExists) {
                        matchingFileListings.push({
                            fullPath: '/' + dirPath + file + '/',
                            name: file,
                            relativePath: relativePathPrefix + fileName + '/' + defaultFileName,
                            isDirectory: true
                        });
                        return true;
                    }
                });
            }
            else if (file.endsWith('.md')) {
                let fileNameFragments = fileName.split('.');
                let name = fileNameFragments.slice(0, fileNameFragments.length - 1).join('.');
                matchingFileListings.push({
                    fullPath: '/' + dirPath + file,
                    name: name,
                    relativePath: relativePathPrefix + fileName,
                    isDirectory: false,
                    isCurrentFile: currentFileName === fileName
                });
                console.log(fileName);
            }
        });
        return matchingFileListings;
    }

    createDir(dirListings) {
        let lineEnding = workspace.getConfiguration("files").get("eol");
        let tabSize = workspace.getConfiguration("editor").get("tabSize");
        let insertSpaces = workspace.getConfiguration("editor").get("insertSpaces");
        let tab = '\t';
        if (insertSpaces && tabSize > 0) {
            tab = " ".repeat(tabSize);
        }


        let optionsText = [];
        optionsText.push('<!-- DIR ');
        optionsText.push('-->' + lineEnding);

        let text = [];
        text.push(optionsText.join(''));

        dirListings.forEach(fileListings => {
            let tableHeader = [];

            fileListings.forEach(fl => {
                let name = fl.name;
                if (fl.isDirectory) name += '>';

                let fileLinkText;
                if (fl.isCurrentFile) fileLinkText = ` ${name}` + lineEnding;
                else fileLinkText = ` [${name}](${fl.relativePath}) ` + lineEnding;

                tableHeader.push(fileLinkText);
            });

            let tableHeaderStr = `${tableHeader.join('')}`;
            text.push(tableHeaderStr);

            let tableBorderStr = `${fileListings.map(() => '').join('')}`;
            text.push(tableBorderStr);

            text.push('');
        });

        text.push("<!-- /DIR -->");

        return text.join(lineEnding);
    }


    updateDirInEditor(editBuilder, dirListings, insertPosition) {
        let dirText = this.createDir(dirListings);
        editBuilder.insert(insertPosition, dirText);
    }

    getDirRange() {
        let doc = window.activeTextEditor.document;
        let start, stop;
        for (let index = 0; index < doc.lineCount; index++) {
            let lineText = doc.lineAt(index).text;
            if ((start == null) && (lineText.match(REGEXP_DIR_START))) {
                start = new Position(index, 0);
            }
            else if (lineText.match(REGEXP_DIR_STOP)) {
                stop = new Position(index, lineText.length);
                break;
            }
        }
        if ((start != null) && (stop != null)) {
            return new Range(start, stop);
        }
        return null;
    }
}


// this method is called when your extension is deactivated
function deactivate() { }

const _deactivate = deactivate;

export { _deactivate as deactivate };


//# sourceMappingURL=extension.js.map
