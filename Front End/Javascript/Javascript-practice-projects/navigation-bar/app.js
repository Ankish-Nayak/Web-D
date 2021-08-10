// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click',function(){
    links.classList.toggle('show-links');
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add('show-links');
    // }
})