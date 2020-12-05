"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/style.scss");
var GIFT_DATE = new Date('12/5/2020').getTime();
var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var dayTitle = document.getElementById('day');
if (leftButton) {
    leftButton.addEventListener('click', function () { return console.log('left'); });
}
if (rightButton) {
    rightButton.addEventListener('click', function () { return console.log('right'); });
}
if (dayTitle) {
    var today = new Date().getTime();
    var diffInDays = Math.ceil((today - GIFT_DATE) / (1000 * 60 * 60 * 24));
    var maxDay = diffInDays > 0 ? diffInDays : 0;
    dayTitle.innerText = "day " + maxDay.toString();
}
