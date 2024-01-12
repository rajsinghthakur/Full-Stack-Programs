let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transfrom = 'rotate( $ {hRotation}deg)';
    min.style.transfrom = 'rotate( $ {hRotation}deg)';
    sec.style.transfrom = 'rotate( $ {hRotation}deg)';
}

setInterval(displayTime, 1000);