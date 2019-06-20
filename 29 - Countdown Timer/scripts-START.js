let countDown;
const endTime = document.querySelector('.display__end-time');
const timerDisplay = document.querySelector('.display__time-left');
function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countDown = setInterval(() =>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0){
            clearInterval(countDown);
        }        
        displayTimeLeft(secondsLeft);
    }, 1000);
}


function displayTimeLeft(seconds){
    const unformattedMinutes = Math.floor(seconds / 60);
    const unformattedSeconds = seconds % 60;
    const minutes = unformattedMinutes;
    const remainderSeconds = lessThanTen(unformattedSeconds);
    const display = `${minutes}:${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function lessThanTen(time){
    
    if(time < 10){
        return "0" + time;
    }
    else{
        return time;
    }
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes}`;
    
}