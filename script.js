let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;
let lapCount = 0;

function start() {
    if (!isRunning) {
        timer = setInterval(displayTime, 1000);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 0;
    document.getElementById("laps").innerHTML = "";
    displayTime();
}

function lap() {
    if (isRunning) {
        lapCount++;
        const lapTime = document.createElement('div');
        lapTime.className = 'lap-time';
        lapTime.innerText = `Lap ${lapCount}: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        document.getElementById("laps").appendChild(lapTime);
    }
}

function displayTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("display").innerText = formattedTime;
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}
