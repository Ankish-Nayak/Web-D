const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

let alertBtn = document.querySelector('.alert');
let fillBtn = document.querySelector('.fill');

function degToRad(degrees){
    return degrees * Math.PI / 100;
};

function random( min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function expensiveOperation(){
    for(let i = 0; i<1000000; ++i){
        ctx.fillStyle = 'rgba(0,0,255,0.2)';
        ctx.beginPath();
        ctx.arc(random(0,canvas.width), random(0,canvas.height), 10, degToRad(0), degToRad(360), false);
        ctx.fill();
    }
}

fillBtn.addEventListener('click',expensiveOperation);

alertBtn.addEventListener('click',function(){
    alert('You clicked me');
});