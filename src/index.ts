import './style/style.scss';

const leftButton = window.document.getElementById('left');
const rightButton = window.document.getElementById('right');

if (leftButton) {
  leftButton.addEventListener('click', () => console.log('left'));
}
if (rightButton) {
  rightButton.addEventListener('click', () => console.log('right'));
}

