import './style/style.css';
const Plant = require('./img/plant.png');

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'yo';
  element.classList.add('hello');

  // Add the image to our existing div.
  const myPlant = new Image();
  myPlant.src = Plant;

  element.appendChild(myPlant);

  return element;
}

document.body.appendChild(component());
