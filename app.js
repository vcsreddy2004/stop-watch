let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let count = 0;
let timerKey;
let timerStarted = false;
let timer = () =>{
    count++;
    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100)-(minutes*60));
    milliSeconds = Math.floor(count-(seconds*100)-(minutes*6000));
    document.querySelector("#minutes").innerText = leadingZero(minutes);
    document.querySelector("#seconds").innerText = leadingZero(seconds);
    document.querySelector("#milliSeconds").innerText = leadingZero(milliSeconds);
};
let leadingZero = (time) => {
    if(time<=9)
    {
        return "0" + time;
    }
    else
    {
        return time;
    }
};
let start = document.querySelector("#start");
start.addEventListener("click" , ()=> {
    if(!timerStarted)
    {
        timerStarted = true;
        timerKey = setInterval("timer()" , 1000);
    }
    else
    {
        alert("Timer ha already started");
    }
});
let timeLaps = document.querySelector("#timeLaps");
timeLaps.addEventListener("click" , ()=> {
    document.querySelector("#recordLaps").innerText = 
                            document.querySelector("#recordLaps").innerText + 
                            `${leadingZero(minutes)}:${leadingZero(seconds)}:${leadingZero(milliSeconds)} \n`;  
});
let clearLaps = document.querySelector("#clearLaps");
clearLaps.addEventListener("click" , () => {
    document.querySelector("#recordLaps").innerText = "";
});
let timerStop = document.querySelector("#stop");
timerStop.addEventListener("click" , () => {
    if(timerStarted)
    {
        timerStarted = false;
        clearInterval(timerKey);
    }
    else
    {
        alert("timer has already stoped");
    }
});
let reset = document.querySelector("#reset");
reset.addEventListener("click" , () => {
    timerStarted = false;
    clearInterval(timerKey);
    count = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    document.querySelector("#minutes").innerText = 00;
    document.querySelector("#seconds").innerText = 00;
    document.querySelector("#milliSeconds").innerText = 00;
});