import "./style/style.scss";
// eslint-disable-next-line @shopify/images-no-direct-imports
import plantSvg from "./svg/plants.svg";
import {dayText, oppositeVisibility} from "./code/helpers";
import PLANT_FACTS from "./code/data";

// const GIFT_DATE = new Date('1/08/2021') // TODO - UNCOMMENT ME
const GIFT_DATE = new Date("12/1/2020").getTime();
const MAX_DAY = PLANT_FACTS.length;

// elements
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const dayTitle = document.getElementById("day");
const grid = document.getElementById("grid");
const plant = document.getElementById("plant");
const header = document.getElementById("header");
const fact = document.getElementById("fact-text");

// validate elements found
if (!leftButton || !rightButton || !dayTitle || !grid || !plant || !header || !fact) {
  throw Error("Garden failed to grow");
}

// set grid height with js for mobile
grid.style.height = `${window.innerHeight}px`;

// disable double tap zoom
grid.addEventListener("click", () => ({}));

// parse date
const today = new Date().getTime();
const diffInDays = Math.ceil((today - GIFT_DATE) / (1000 * 60 * 60 * 24));
const currentDay = diffInDays > 1 ? diffInDays : 1;
let selectedDay = currentDay;
if (selectedDay > MAX_DAY) {
  selectedDay = MAX_DAY;
}

// set title, svg, plant fact
header.innerText = "matt's garden";
plant.innerHTML = plantSvg;
fact.innerText = PLANT_FACTS[selectedDay - 1];

// setup day controls
dayTitle.innerText = dayText(selectedDay);
leftButton.style.visibility = selectedDay === 1 ? "hidden" : "visible";
rightButton.style.visibility = selectedDay === MAX_DAY ? "hidden" : "visible";

// add event listeners on controls
leftButton.addEventListener("click", () => {
  if (selectedDay === 1) {
    return;
  }
  selectedDay -= 1;
  if (rightButton.style.visibility === "hidden") {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  if (selectedDay === 1) {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  dayTitle.innerText = dayText(selectedDay);
  fact.innerText = PLANT_FACTS[selectedDay - 1];
});

rightButton.addEventListener("click", () => {
  if (selectedDay === MAX_DAY) {
    return;
  }
  selectedDay += 1;
  if (leftButton.style.visibility === "hidden") {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  if (selectedDay === MAX_DAY) {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  dayTitle.innerText = dayText(selectedDay);
  fact.innerText = PLANT_FACTS[selectedDay - 1];
});
