const btn = document.querySelector('button');
const body = document.querySelector('body');

function random(Min,Max){
    return (Math.floor(Math.random()*(Max-Min+1)+Min));
}
btn.addEventListener('click',function(){
    let newColor = 'rgb( ' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) + ')';
    body.style.backgroundColor = newColor;
    let color =  document.querySelector('span');
    color.textContent = newColor;
});