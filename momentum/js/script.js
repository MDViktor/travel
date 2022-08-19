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

// audio.addEventListener('loadedmetadata', function(){
//   console.log(Math.ceil(audio.duration))
// })

//progressive player
const timeline = document.querySelector(".timeline");
const progressBar = document.querySelector(".progress");
const currentTimeTrack = document.querySelector(".current");
const duration = document.querySelector(".length");
const track = document.querySelector(".track");
// language
const switcherLanguage = document.querySelector('.slider.round');
let flague = true;
const language = {
  en: {
    greeting: `Good ${getTimeOfDay()}`, placeholder: `[Enter name]`, weatherPlaceholder:`[enter city name]`, windspeed: [`Wind speed: `, ` m/s`], humidity: [`Humidity: `, `%`], 
  },
  ru: {
    greeting: getTimeOfDayRu(), placeholder: `[Введите имя]`, weatherPlaceholder:`[имя города]`, windspeed: [`Скорость ветра: `, ` м/с`], humidity: [`Влажность: `, `%`], 
  },
}



function elseTranslate() {
  if(flague){
    userName.placeholder = language.en.placeholder;
    city.placeholder = language.en.weatherPlaceholder;
  } else {
    userName.placeholder = language.ru.placeholder;
    city.placeholder = language.ru.weatherPlaceholder;
  }
}
function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  if (flague){
    greeting.textContent = language.en.greeting;
  }else{
    greeting.textContent = language.ru.greeting
  }
  setTimeout(showTime, 1000);
}
function showDate() {
  const text = new Date();
  const options = {weekday:'long', month: 'long', day: 'numeric'};

  const currentDate = text.toLocaleDateString('en-US', options);
  const currentDateRu = text.toLocaleDateString('ru-RU', options);
  if(flague){
    date.textContent = currentDate;
  } else {
    date.textContent = currentDateRu;
  }
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
function getTimeOfDayRu() {
  const arg = new Date();
  const hours = arg.getHours();
  const shedule = {
    'Доброй ночи': [0, 1, 2, 3, 4, 5],
    'Доброе утро': [6, 7, 8, 9, 10, 11],
    'Добрый день': [12, 13, 14, 15, 16, 17],
    'Добрый вечер': [18, 19, 20, 21, 22, 23]
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
  const urlRu = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=ee89924f6aa0fe07d38cb882822a69c0&units=metric`;
  let res = await fetch(url);
  if (flague) {
    res = await fetch(url);
  } else {
    res = await fetch(urlRu);
  }
  const data = await res.json(); 
  
  if(res.ok){
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherError.textContent = '';
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (flague){
      wind.textContent = `${language.en.windspeed[0]}${Math.floor(data.wind.speed)}${language.en.windspeed[1]}`;
      humidity.textContent = `${language.en.humidity[0]}${Math.floor(data.main.humidity)}${language.en.humidity[1]}`;
    }else{
      wind.textContent = `${language.ru.windspeed[0]}${Math.floor(data.wind.speed)}${language.ru.windspeed[1]}`;
      humidity.textContent = `${language.ru.humidity[0]}${Math.floor(data.main.humidity)}${language.ru.humidity[1]}`;
    }
    

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
  const quotesRus = './js/quotesRus.json';
  let res = await fetch(quotes);
  if (flague){
    res = await fetch(quotes);
  } else {
    res = await fetch(quotesRus);
  }
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
  audio.currentTime = 0;
  if(play.classList.contains('pause')){
    audio.play();
    track.textContent = playList[playNum].title;
  } else{
    isPlay = false;
    audio.pause();
    track.textContent = '';
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
function switchLanguage(){
  switcherLanguage.addEventListener('click', function() {
    switcherLanguage.classList.toggle('ru');
    if(switcherLanguage.classList.contains('ru')){
      flague = false;
    } else{
      flague = true;
    }
  });
}
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);
setInterval(() => {
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";

  currentTimeTrack.textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
audio.addEventListener(
  "loadeddata",
  () => {
    duration.textContent = getTimeCodeFromNum(
      audio.duration
    );
    // audio.volume = .75;
  },
  false
);

getQuotes();
showTime();
setBg();
switchLanguage();
elseTranslate();

document.addEventListener('DOMContentLoaded', getWeather);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
city.addEventListener('change', getWeather);
switcherLanguage.addEventListener('click', getWeather);
switcherLanguage.addEventListener('click', elseTranslate);
switcherLanguage.addEventListener('click', getQuotes);
changeQuote.addEventListener('click', getQuotes)
play.addEventListener('click', playAudio);
nextTrack.addEventListener('click', playNext);
prevTrack.addEventListener('click', playPrev);