var a = 0;
var percent = 63;
var end = 1565 - (1565 * percent) / 100
var run = setInterval(frames, 15);
document.documentElement.style.setProperty('--percent', percent);
document.documentElement.style.setProperty('--end', end);

function frames(){
    a = a + 1;
    if(a == percent+1){
        clearInterval(run);
    } else{
        var counter = document.querySelector(".count");
        counter.textContent = a + "%"
    }
}

setTimeout(stopPoint, 1000);
function stopPoint(){
    var stop = document.querySelector(".stop");
    stop.style.display = "block";
}