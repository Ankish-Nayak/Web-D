const btn = document.querySelector('button');
const p = document.createElement('p');
btn.addEventListener('click',function(){
    alert('Here we go');
    p.textContent = 'Newly Added Paragraph to show syncronousity of js.';
    document.body.appendChild(p);
})