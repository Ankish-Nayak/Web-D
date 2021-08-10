const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let body = document.querySelector('body');
const btn = document.getElementById('btn');
let color =  document.querySelector('span');

function random(Max,Min){
    return Math.floor(Math.random()*(Max-Min)+Min);
}

btn.addEventListener('click',function() {
    let newColor = colors[random(0,colors.length-1)];
    body.style.backgroundColor = newColor;
    color.textContent = newColor;
});