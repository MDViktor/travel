const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  getTimeOfDay();
  setTimeout(showTime, 1000);
}

function showDate() {
  const text = new Date();
  const options = {weekday:'long', month: 'long', day: 'numeric'};
  const currentDate = text.toLocaleDateString('en-US', options);
  date.textContent = currentDate;
}

function getTimeOfDay() {
  const arg = new Date();
  const hours = arg.getHours();
  const shedule = {
    'night': [0, 1, 2, 3, 4, 5],
    'morning': [6, 7, 8, 9, 10, 11],
    'day': [12, 13, 14, 15, 16, 17],
    'evening': [18, 19, 20, 21, 22, 23]
  }
  for (let k in shedule){
    if (shedule[k].includes(hours)){
      greeting.textContent = `Good ${k}`;
    }
  }
}

function setLocalStorage() {
  localStorage.setItem('name', userName.value);
}
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

showTime();
