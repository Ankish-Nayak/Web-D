const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0; 
  let parsed = JSON.parse(catString);

  for(let i = 0; i<parsed.length; ++i){
      if(i == parsed.length-1){
          motherInfo += parsed[i].name;
      }else{
          motherInfor += parsed[i].name + ", ";
      } 
      for(let j = 0; j<parsed[i].kittens.length; ++j){
          if(parsed[i].kittens[j] === 'm'){
              male++;
              total++;
          }
      } 
  }
  kittenInfo = `There are ${total} kittens and out of those ${male} are males and ${total-male} are females`; 

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    