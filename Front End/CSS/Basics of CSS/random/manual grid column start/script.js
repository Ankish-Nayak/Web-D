const first = document.querySelector('.one');
const divs = document.querySelectorAll('.input > div');
const reset = document.querySelector('.reset');
console.log(divs);
divs[0].style.borderColor = 'blue';
let selected = 0;
reset.addEventListener('click',function(){
    first.style.gridColumnStart = 'auto';
    for(let i = 0; i<divs.length; ++i){
        divs[i].style.borderColor = 'grey';
    }
    divs[0].style.borderColor = 'blue';
    selected = 0;
})

for(let i = 0; i<divs.length; ++i){
    divs[i].addEventListener('click',function(){
        selected = i; 
        for(let i = 0; i<divs.length; ++i){
            divs[i].style.borderColor = 'grey';
        }
        divs[i].style.borderColor = 'blue';  
        first.style.gridColumnStart = divs[i].children[0].children[1].textContent;
    })
    divs[i].addEventListener('mouseover',function(){ 
        divs[i].style.borderColor = 'rgb(59, 57, 57)';
    })
    divs[i].addEventListener('mouseleave',function(){
        if(selected == i){
            divs[i].style.borderColor = 'blue';
        }else{
            divs[i].style.borderColor = 'grey';
        }
    })
    // divs[i].addEventListener('mouseover',function(){
    //     divs[i].style.borderColor = 'grey';
    // })
}

