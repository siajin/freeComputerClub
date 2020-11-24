var time = 0;

goalText = document.getElementById('goal_time');
goalText.value = localStorage.getItem('goalTime');
currentText = document.getElementById('current_time');
currentText.value = localStorage.getItem('currentTime');

function setGoal() {
    goal = document.getElementById('goal_time').value;
    goalText.innerText = goal;
    setStorage('goalTime', goal);
}

function setTime() {
    time = document.getElementById('current_time').value;
    currentText.innerText = time;
    setStorage('currentTime', time);
}

function setStorage(key, time) {
    localStorage.setItem(key, time);
}