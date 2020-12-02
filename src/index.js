import _ from 'lodash';
import './style/style.css';
import Plant from './img/plant.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myPlant = new Image();
  myPlant.src = Plant;

  element.appendChild(myPlant);

  return element;
}

document.body.appendChild(component());
