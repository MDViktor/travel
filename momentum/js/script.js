const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

function showDate() {
    const text = new Date();
    const options = {weekday:'long', month: 'long', day: 'numeric'};
    const currentDate = text.toLocaleDateString('en-US', options);
    date.textContent = currentDate;
}

showTime();
