import "./style/style.scss";
import {dayText, oppositeVisibility} from "./code/helpers";

// const GIFT_DATE = new Date('1/05/2021') // TODO - UNCOMMENT ME
const GIFT_DATE = new Date("12/1/2020").getTime();

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const dayTitle = document.getElementById("day");
const grid = document.getElementById("grid");

if (!leftButton || !rightButton || !dayTitle || !grid) {
  throw Error("Garden failed to grow");
}

grid.style.height = `${window.innerHeight}px`;

const today = new Date().getTime();
const diffInDays = Math.ceil((today - GIFT_DATE) / (1000 * 60 * 60 * 24));
const maxDay = diffInDays > 1 ? diffInDays : 1;
let day = maxDay;
dayTitle.innerText = dayText(day);

leftButton.style.visibility = day === 1 ? "hidden" : "visible";
rightButton.style.visibility = day === maxDay ? "hidden" : "visible";

leftButton.addEventListener("click", () => {
  if (day === 1) {
    return;
  }
  day -= 1;
  if (rightButton.style.visibility === "hidden") {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  if (day === 1) {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  dayTitle.innerText = dayText(day);
});

rightButton.addEventListener("click", () => {
  if (day === maxDay) {
    return;
  }
  day += 1;
  if (leftButton.style.visibility === "hidden") {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  if (day === maxDay) {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  dayTitle.innerText = dayText(day);
});


