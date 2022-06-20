function getLang(){
    var lang = document.querySelector("select#lang-switch").value;
    return lang;
}
window.addEventListener("DOMContentLoaded", function () {
    lang = getLang();
});