const divs = document.querySelectorAll('.input div');
const first = document.querySelector('.first');
const reset = document.querySelector('.reset');
let selected = 0;

let borderColor = 'grey';
let borderHoverColor = 'rgb(59, 57, 57)';
let selectedborderColor = 'blue'; 


divs[0].style.borderColor = selectedborderColor; 

reset.addEventListener('click',function(){
    selected = 0;
    for(let i = 0; i<divs.length; ++i){
        divs[i].style.borderColor = borderColor;
    }
    divs[selected].style.borderColor = selectedborderColor;
    first.style.gridColumn = divs[selected].children[0].children[1].textContent;
});

for(let i = 0; i<divs.length; ++i){
    divs[i].addEventListener('click',function(){
        selected = i;
        first.style.gridColumn = divs[selected].children[0].children[1].textContent;
        console.log(divs[selected].children[0].children[1]);
        for(let j = 0; j<divs.length; ++j){
            divs[j].style.borderColor = borderColor;
        }
        divs[selected].style.borderColor = selectedborderColor;
    });
    divs[i].addEventListener('mouseover',function(){
        if(i != selected){
            divs[i].style.borderColor = borderHoverColor;
        }
    });
    divs[i].addEventListener('mouseleave',function(){
        if(i != selected){
            divs[i].style.borderColor = borderColor;
        }
    })
}