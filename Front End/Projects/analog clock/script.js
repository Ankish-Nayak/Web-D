var clock = document.querySelector('.innerClock');
var dialLines = document.getElementsByClassName('diallines');
 
for(let i = 0; i<60; ++i) {
    clock.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform += " rotate("+6*i+"deg)"; 
}  

function clocks(){
    var weekDay = ['Sunday','Monday','Tueday','Wednesday','Thrusday','Friday','Saturday'],
    d = new Date(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds(),
    date = d.getDate(),
    month = d.getMonth()+1,
    year = d.getFullYear(),
    hDeg = hours*30 + minutes*(360/720),
    mDeg = minutes*6 + seconds*(360/3600),
    sDeg = seconds*6;

    var dateD = document.querySelector('.date'),
    dayD = document.querySelector('.day'),
    hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'); 

    if(month < 10) {
        month = "0" + month;
    } 
    dayD.textContent = weekDay[d.getDay()];  
    hourHand.style.transform = "rotate("+hDeg+"deg)";
    minuteHand.style.transform = "rotate("+mDeg+"deg)";
    secondHand.style.transform = "rotate("+sDeg+"deg)"; 
    dateD.innerHTML = date+"/"+month+"/"+year; 
    console.log(hDeg+" "+mDeg+" "+sDeg);
    // console.log(hours+" "+minutes+" "+seconds);
} 
setInterval('clocks()',100); 