// createElement() test
var el = xObject.createElement({
    tagName: "div",
    className: "classOne classTwo",
    html: "<b>Hello, World!</b>",
    attributes: {
        align: "center"
    },
    children: [{
        tagName: "a",
        html: "<u>Text</u>"
    }]
});