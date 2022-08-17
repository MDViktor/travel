import playList from './playList.js';
// date and clock
const time = document.querySelector('.time');
const date = document.querySelector('.date');
// greeting
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
// slider
const body = document.querySelector('body');
let RandomNum = getRandomNum(1, 20);
// weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error')
// quotes 
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
// audioplayer
const play = document.querySelector('.play');
const nextTrack = document.querySelector('.play-next');
const prevTrack = document.querySelector('.play-prev');
const audio = new Audio();
let isPlay = false;
let playNum = 0;
const playListContainer = document.querySelector('.play-list');
for (let track of playList){
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = track.title;
  playListContainer.append(li);
}
const currentTracks = document.querySelectorAll('.play-item');


function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  greeting.textContent = `Good ${getTimeOfDay()}`;
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
    'afternoon': [12, 13, 14, 15, 16, 17],
    'evening': [18, 19, 20, 21, 22, 23]
  }
  for (let k in shedule){
    if (shedule[k].includes(hours)){
      return k;
    }
  }
}
function setLocalStorage() {
  localStorage.setItem('name', userName.value);
  localStorage.setItem('city', city.value)
}
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    getWeather();
  }
}
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setBg() {
  const img = new Image();

  const timeOfDay = getTimeOfDay();
  let bgNum = String(RandomNum).padStart(2, 0);
  const bgLink = `https://raw.githubusercontent.com/MDViktor/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

  img.src = bgLink; 
  img.onload = () => {      
    body.style.backgroundImage = `url(${img.src})`;
  };
}

function getSlideNext() {
  if (RandomNum === 20) {
    RandomNum = 1;
  }
  else {
    RandomNum += 1;
  }
  setBg();
}
function getSlidePrev() {
  if (RandomNum === 1) {
    RandomNum = 20;
  }
  else {
    RandomNum -= 1;
  }
  setBg();
}
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ee89924f6aa0fe07d38cb882822a69c0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  if(res.ok){
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherError.textContent = '';
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`;

  }
  else{
    const log = `Error! city not found for '${city.value}'!`
    weatherError.textContent = log;
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = ``;
    weatherDescription.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;
  }
}

async function getQuotes() {  
  const quotes = './js/quotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  let quoteNum = getRandomNum(0, 102);
  for (let value in data){
    quote.textContent = `"${data[value][quoteNum].quote}"`;
    author.textContent = data[value][quoteNum].author;
  }
}
function audioStyleRemove() {
  currentTracks.forEach(element => {
    if(element.textContent===playList[playNum].title){
      element.classList.remove('shine');
    }
  });
}


function playAudio() {
  play.classList.toggle('pause');
  isPlay = true;
  audio.src = playList[playNum].src;;
  // audio.currentTime = 0;
  if(play.classList.contains('pause')){
    audio.play();
  } else{
    isPlay = false;
    audio.pause();
  }
  currentTracks.forEach(element => {
    if (isPlay){
      if(element.textContent===playList[playNum].title){
        element.classList.toggle('shine');
      }
    } else {
      element.classList.remove('shine');
    }
  });
  audio.onended = () =>{
    audioStyleRemove();
    playNext();
  }
}
function playNext() {
  audioStyleRemove();
  play.classList.toggle('pause');
  playNum+=1;
  if(playNum === (playList.length)){
    playNum = 0;
  }
  playAudio()
}
function playPrev() {
  audioStyleRemove();
  play.classList.toggle('pause');
  playNum-=1;
  if(playNum < 0){
    playNum = (playList.length-1);
  }
  playAudio()
}



getQuotes();
showTime();
setBg();

document.addEventListener('DOMContentLoaded', getWeather);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
city.addEventListener('change', getWeather);
changeQuote.addEventListener('click', getQuotes)
play.addEventListener('click', playAudio);
nextTrack.addEventListener('click', playNext);
prevTrack.addEventListener('click', playPrev);