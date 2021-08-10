const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
console.log(ctx); //  reference to the object created by canvas 2d drawing  api

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
// added these just incase if window get resized so that linearity maintains that means resizing the window now would not change size of object on canvas 
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
})

const mouse = {
    x: undefined,
    y: undefined
};
const particlesArray = [];
let hue = 0;

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y; 
    // whenever mouse is clicked new partilces is created on canvas
    for(let i = 0; i<10; ++i){
        particlesArray.push(new Particle());
    }
});

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y; 
    for(let i = 0; i<5; ++i){
        particlesArray.push(new Particle());
    }
});
function random( Min, Max){
    return Math.floor(Math.random()*(Max-Min) + Min);
}
// class made for creating number of different balls with diffs sizes and speeds 
// Originally they start moving away from the curr mouse position 
class Particle {
    constructor(){
        // this will produce balls at mouse position 
        this.x = mouse.x;
        this.y = mouse.y;
        // this will spread particles over the canvas
        // this.x = random( 0, canvas.width);
        // this.y = random( 0, canvas.height);
        this.size = random( 1, 16);
        this.speedX = random( -1.5, 1.5);
        this.speedY = random( -1.5, 1.5); 
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2){
            this.size -= 0.2;
        }
    }
    draw(){ 
        ctx.beginPath();
        let color = 'rgb(' + random( 0, 255) +  ', ' + random( 0, 255) + ', ' + random( 0, 255) + ')';
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.size, 0, 2 * Math.PI, true);
        ctx.fill();
    }
} 
 

function handlesParticles(){
    // if(particlesArray.length > 0){
    //     console.log(particlesArray);
    // } 
    for(let i = 0; i<particlesArray.length; ++i){
        particlesArray[i].update();
        particlesArray[i].draw();
        // constalation effect : drawing lines between line bw partilces at a certain distance 
        for(let j = i; j<particlesArray.length; ++j){
            const dx = particlesArray[i].x-particlesArray[j].x;
            const dy = particlesArray[i].y-particlesArray[j].y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < 100){
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.moveTo( particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x,particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if(particlesArray[i].size <= 0.2){
            particlesArray.splice( i, 1);
            i--;
        }
    }
}
console.log(particlesArray);
// hsl is another type of color picker here hue value moves around a color wheel and according to that we can get color at any value of hue 
function animate(){
    // this will completely clears the curr frame with new black one 
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    // these provide particles a trail 
    // ctx.fillStyle = 'rgba( 0, 0, 0, 0.02)';
    // ctx.fillRect( 0, 0, canvas.width, canvas.height);
    handlesParticles();
    hue += 5;
    requestAnimationFrame(animate);
}

animate();