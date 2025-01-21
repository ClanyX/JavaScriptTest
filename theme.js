const themeBtn = document.getElementById('btn');
const body = document.body;
let themeState = localStorage.getItem('theme') || 'dark';

window.onload = () => body.dataset.bsTheme = themeState;

themeBtn.addEventListener('click', () =>{
    body.dataset.bsTheme = body.dataset.bsTheme === 'light' ? 'dark' : 'light';
    themeState = body.dataset.bsTheme;
    localStorage.setItem('theme', themeState);
});