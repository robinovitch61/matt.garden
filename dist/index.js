"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/style.scss");
var leftButton = window.document.getElementById('left');
var rightButton = window.document.getElementById('right');
if (leftButton) {
    leftButton.addEventListener('click', function () { return console.log('left'); });
}
if (rightButton) {
    rightButton.addEventListener('click', function () { return console.log('right'); });
}
