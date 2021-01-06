import "./style/style.scss";
// eslint-disable-next-line @shopify/images-no-direct-imports
import plantSvg from "./svg/plants.svg";
import {
  dayText,
  oppositeVisibility,
  setHaloVisibility,
  togglePlantVisibility,
  toggleSproutVisibility,
} from "./code/helpers";
import {PLANT_FACTS, PLANT_NAMES} from "./code/data";

// UNCOMMENT ME
const GIFT_DATE = new Date("1/07/2021").getTime();
// const GIFT_DATE = new Date("1/04/2020").getTime();
const MAX_DAY = PLANT_FACTS.length;

// elements
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const dayTitle = document.getElementById("day");
const grid = document.getElementById("grid");
const plant = document.getElementById("plant");
const header = document.getElementById("header");
const factTitle = document.getElementById("fact-title");
const factLatin = document.getElementById("fact-latin");
const factText = document.getElementById("fact-text");

// validate elements found
if (!leftButton || !rightButton || !dayTitle || !grid || !plant || !header || !factTitle || !factLatin || !factText) {
  throw Error("Garden failed to grow");
}

// set grid height with js for mobile
grid.style.height = `${window.innerHeight}px`;

// disable double tap zoom
grid.addEventListener("click", () => ({}));

// parse date
const today = new Date().getTime();
const diffInDays = Math.ceil((today - GIFT_DATE) / (1000 * 60 * 60 * 24));
let currentDay: number;
let showHalos = true;
if (diffInDays < 1) {
  currentDay = 1;
} else if (diffInDays > MAX_DAY) {
  currentDay = MAX_DAY;
  showHalos = false;
} else {
  currentDay = diffInDays;
}
let selectedDay = currentDay;

// set title, svg
header.innerText = "matt's garden";
plant.style.visibility = "hidden";
plant.innerHTML = plantSvg;

// plant fact
let plantFact = PLANT_FACTS[selectedDay - 1];
factTitle.innerText = plantFact.name;
factLatin.innerText = plantFact.latinName;
factText.innerHTML = plantFact.text;

// show plants - everything starts visible so make all invisible
PLANT_NAMES.forEach((pl) => togglePlantVisibility(pl));
const range = Array.from(Array(selectedDay).keys());
range.forEach((plantNum) => togglePlantVisibility(PLANT_NAMES[plantNum]));

// show halo for new
PLANT_NAMES.forEach((pl) => setHaloVisibility(pl, false));
if (showHalos) {
  setHaloVisibility(PLANT_NAMES[currentDay - 1], true);
}

// show all sprouts for plants not yet shown
PLANT_NAMES.slice(1, currentDay).forEach((pl) => toggleSproutVisibility(pl));
plant.style.visibility = "visible";

// setup day controls
dayTitle.innerText = dayText(currentDay);
leftButton.style.visibility = currentDay === 1 ? "hidden" : "visible";
rightButton.style.visibility = "hidden";

// add event listeners on controls
leftButton.addEventListener("click", () => {
  if (selectedDay === 1) {
    return;
  }
  selectedDay -= 1;
  togglePlantVisibility(PLANT_NAMES[selectedDay]);
  toggleSproutVisibility(PLANT_NAMES[selectedDay]);
  setHaloVisibility(PLANT_NAMES[selectedDay - 1], true);
  setHaloVisibility(PLANT_NAMES[selectedDay], false);
  if (rightButton.style.visibility === "hidden") {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  if (selectedDay === 1) {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  dayTitle.innerText = dayText(selectedDay);
  plantFact = PLANT_FACTS[selectedDay - 1];
  factTitle.innerText = plantFact.name;
  factLatin.innerText = plantFact.latinName;
  factText.innerText = plantFact.text;
});

rightButton.addEventListener("click", () => {
  if (selectedDay === currentDay) {
    return;
  }
  togglePlantVisibility(PLANT_NAMES[selectedDay]);
  toggleSproutVisibility(PLANT_NAMES[selectedDay]);
  setHaloVisibility(PLANT_NAMES[selectedDay - 1], false);
  setHaloVisibility(PLANT_NAMES[selectedDay], true);
  selectedDay += 1;
  if (leftButton.style.visibility === "hidden") {
    leftButton.style.visibility = oppositeVisibility(leftButton);
  }
  if (selectedDay === currentDay) {
    rightButton.style.visibility = oppositeVisibility(rightButton);
  }
  dayTitle.innerText = dayText(selectedDay);
  plantFact = PLANT_FACTS[selectedDay - 1];
  factTitle.innerText = plantFact.name;
  factLatin.innerText = plantFact.latinName;
  factText.innerText = plantFact.text;
});
