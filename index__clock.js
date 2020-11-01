const clock = document.querySelector(".clock");


function getTime() {
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    clock.innerText = ` ${hour < 10 ? `0${hour}` : hour}시${minutes < 10 ? `0${minutes}` : minutes}분${seconds < 10 ? `0${seconds}` : seconds}초`
}


function init() {
    setInterval(getTime, 1000);
}

init();