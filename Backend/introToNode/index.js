const superHeroes = require('superheroes');
const superVillains = require('supervillains');
console.log('Villains against Superheroes Tonight');

for(let i = 0; i<10; ++i){
    console.log(superVillains.random() + " against " + superHeroes.random());
}