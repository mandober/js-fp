/*
'cookieobj' for full CookieJs Object (not maintained since 1.3.6)
'cookieclass' for full CookieJs Class
'chkcookie' for Check Cookie Function
'getcookie' for Get Cookie Function
'setcookie' for Set Cookie Function
'delcookie' for Delete Cookie Function
'delallcookie' for Delete All Cookie Function
'gencookie' for ES6 Generator to loop all Cookies
*/


// 'cookieclass' for full CookieJs Class
class cookiesJs {
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
    }

    getCookie(cname) {
        const name = cname + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return '';
    }

    checkCookie(cname) {
        const cookie = this.getCookie(cname);
        if (cookie !== '') {
            return true;
        }
        return false;
    }

    deleteCookie(cname) {
        this.setCookie(cname, '', -1);
    }

    deleteAllCookies() {
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            this.deleteCookie(ca[i].split('=')[0]);
        }
    }

    *genCookies() {
        const ca = document.cookie.split(';');
        let index = 0;
        while (index < ca.length) {
            const c = ca[index];
            index++;
            const cobj = {
                name: c.split('=')[0].trim(),
                value: c.split('=')[1].trim(),
            };
            yield cobj;
        }
    }

} // end class


// 'cookieobj' for full CookieJs Object (not maintained since 1.3.6)
const cookies = (function () {
    return {
        setCookie: (cname, cvalue, exdays) => {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            const expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + '; ' + expires;
        },
        getCookie: (cname) => {
            const name = cname + '=';
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i += 1) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1);
                if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
            }
            return '';
        },
        checkCookie: (cname) => {
            const cookie = window.CookieObj.getCookie(cname);
            if (cookie !== '') {
                return true;
            }
            return false;
        },
    };
}());
window.CookieObj = cookies;


// 'gencookie' for ES6 Generator to loop all Cookies
function *genCookies() {
        const ca = document.cookie.split(';');
        let index = 0;
        while (index < ca.length) {
            const c = ca[index];
            index++;
            const cobj = {
                name: c.split('=')[0].trim(),
                value: c.split('=')[1].trim(),
            };
            yield cobj;
        }
    }


// 'delallcookie' for Delete All Cookie Function
function deleteAllCookies() {
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            this.deleteCookie(ca[i].split('=')[0]);
        }
    }


// 'delcookie' for Delete Cookie Function
function deleteCookie(cname) {
        this.setCookie(cname, '', -1);
    }


// 'setcookie' for Set Cookie Function
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires;
}
// 'getcookie' for Get Cookie Function
function getCookie(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
}
// 'chkcookie' for Check Cookie Function
function checkCookie(cname) {
    const cookie = window.CookieObj.getCookie(cname);
    if (cookie !== '') {
        return true;
    }
    return false;
}

