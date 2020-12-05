import './style/style.scss';

// const GIFT_DATE = new Date('1/05/2021') // TODO - UNCOMMENT ME
const GIFT_DATE = new Date('12/5/2020').getTime();

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const dayTitle = document.getElementById('day');

if (leftButton) {
  leftButton.addEventListener('click', () => console.log('left'));
}
if (rightButton) {
  rightButton.addEventListener('click', () => console.log('right'));
}

if (dayTitle) {
  const today = new Date().getTime();
  const diffInDays = Math.ceil((today - GIFT_DATE) / (1000 * 60 * 60 * 24));
  const maxDay = diffInDays > 0 ? diffInDays : 0;
  dayTitle.innerText = `day ${maxDay.toString()}`;
}

