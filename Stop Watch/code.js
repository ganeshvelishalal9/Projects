let sec = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(num){
    return String(num).padStart(2,"0");
}
function setTime(){
    let min = Math.floor(sec/60);
    let second = sec%60;
    time.innerHTML = `${padStart(min)}:${padStart(second)}`;
}
function timer(){
    sec++;
    setTime();
}
function startClock(){
    if(interval) stopClock();
    interval = setInterval(timer,1000)
}
function stopClock(){
    clearInterval(interval);
}
function resetClock(){
    stopClock();
    sec=0;
    setTime();
}