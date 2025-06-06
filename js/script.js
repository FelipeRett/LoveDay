const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsl = document.getElementById("seconds");

const dataInicio = "29 March 2025";

function countdown(){

    const newDate = new Date(dataInicio);
    const currentDate = new Date();

    const totalSecond = (currentDate - newDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsl.innerHTML = formatTime(second);
}

function formatTime(time){
        return time < 10 ? `0${time}` : time; 
}

countdown();

setInterval(countdown);

//Chuva

const rains = document.querySelectorAll(".rain");
const getRadomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 0) + min);
}
rains.forEach(rain=>{
    rain.style = `--rain-delay:${getRadomNumber(1, 3000)}ms`;
})

//Carrosel

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 250}px)`;
}

setInterval(carrosel, 4000);

