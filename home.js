var a = 0;
var percent = parseInt(localStorage.getItem('currentTime') / localStorage.getItem('goalTime') * 100);
var end = 1256 - (1256 * percent) / 100
var run = setInterval(frames, 700/percent);

goalText = document.getElementById('goal');
goalText.innerText = localStorage.getItem('goalTime');
currentText = document.getElementById('current');
currentText.innerText = localStorage.getItem('currentTime');

document.documentElement.style.setProperty('--percent', percent);
document.documentElement.style.setProperty('--end', end);

function frames(){
    a = a + 1;
    if(a == percent+1){
        clearInterval(run);
    } else{
        var counter = document.querySelector(".count");
        counter.textContent = a + "%";
    }
}

setTimeout(stopPoint, 700);
function stopPoint(){
    var stop = document.querySelector(".stop");
    stop.style.display = "block";
}