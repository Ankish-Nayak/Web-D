console.log('Starting');
let image;

fetch('https://raw.githubusercontent.com/mdn/learning-area/master/javascript/asynchronous/introducing/coffee.jpg').then(function(response){
    console.log('It worked');
    return response.blob();
}).then(function(myBolb){
    let objectURL = URL.createObjectURL(myBolb);
    image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).catch(function(error){
    console.log("There has been a problem with your fetch operation: "+error.message);
});

console.log('All done!');