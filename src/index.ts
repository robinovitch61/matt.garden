import "./style/style.scss";
// eslint-disable-next-line @shopify/images-no-direct-imports
import plantSvg from "./svg/plants.svg";
import {dayText, oppositeVisibility, togglePlant} from "./code/helpers";
import {PLANT_FACTS, PLANT_NAMES} from "./code/data";

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
const currentDay = diffInDays > MAX_DAY ? MAX_DAY : diffInDays;
let selectedDay = currentDay;

// set title, svg, plant fact
header.innerText = "matt's garden";
plant.style.visibility = "hidden";
plant.innerHTML = plantSvg;
fact.innerText = PLANT_FACTS[selectedDay - 1];

// show plants
PLANT_NAMES.forEach((pl) => togglePlant(pl));
const range = Array.from(Array(selectedDay).keys());
range.forEach((plantNum) => togglePlant(PLANT_NAMES[plantNum]));
plant.style.visibility = "visible";

// setup day controls
dayTitle.innerText = dayText(selectedDay);
leftButton.style.visibility = selectedDay === 1 ? "hidden" : "visible";
rightButton.style.visibility = "hidden";

// add event listeners on controls
leftButton.addEventListener("click", () => {
  if (selectedDay === 1) {
    return;
  }
  selectedDay -= 1;
  togglePlant(PLANT_NAMES[selectedDay]);
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
  if (selectedDay === currentDay) {
    return;
  }
  togglePlant(PLANT_NAMES[selectedDay]);
  selectedDay += 1;
  if (leftButton.style.visibility === "hidden") {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  if (selectedDay === currentDay) {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  dayTitle.innerText = dayText(selectedDay);
  fact.innerText = PLANT_FACTS[selectedDay - 1];
});
