const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
 
let imagesRef;

for(let i = 1; i<=5 ; ++i) {
    const newImage = document.createElement('img');
    newImage.setAttribute('images/pic' + i + '.jpg', '.thumbBar img');
    thumbBar.appendChild(newImage);
}


// const newImage = document.createElement('img');
// newImage.setAttribute('class', '.displayed-img');
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
