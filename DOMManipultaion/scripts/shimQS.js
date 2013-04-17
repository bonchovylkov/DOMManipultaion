document.querySelectorAll = function (cssSelectors) {
    if (cssSelectors[0]==="#") {
        return document.getElementById(cssSelectors.substr(1));
    }
    else if (cssSelectors[0]===".") {
        return document.getElementsByClassName(cssSelectors.substr(1));
    }
    else {
        return document.getElementsByTagName(cssSelectors.substr(1));
    }
}
document.querySelector = function (cssSelectors) {
    if (cssSelectors[0] === "#") {
        return document.getElementById(cssSelectors.substr(1));
    }
    else if (cssSelectors[0] === ".") {
        return document.getElementsByClassName(cssSelectors.substr(1))[0];
    }
    else {
        return document.getElementsByTagName(cssSelectors.substr(1))[0];
    }
}