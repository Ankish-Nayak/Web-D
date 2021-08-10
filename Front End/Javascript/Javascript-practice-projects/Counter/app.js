const CounterValue = document.getElementById('value');
const decreasebtn = document.getElementById('decrease');
const increasebtn = document.getElementById('increase');
const resetbtn = document.getElementById('reset');

increasebtn.addEventListener('click',function(){
    CounterValue.textContent = (Number(CounterValue.textContent) + 1);
    if(CounterValue.textContent >= 0){
        CounterValue.style.color = 'rgb(97,125,152)'; 
    }
});

decreasebtn.addEventListener('click', function(){
    CounterValue.textContent = (Number(CounterValue.textContent) - 1);  
    if(Number(CounterValue.textContent) < 0){
        CounterValue.style.color = 'red';
    }
});

resetbtn.addEventListener('click',function(){
        CounterValue.style.color = 'rgb(97,125,152)'; 
        CounterValue.textContent = 0;
});