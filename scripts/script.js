const hamburger = document.getElementById('nav-button');
const menu = document.getElementById('menu');
const navButton = document.getElementById('nav-button');
const closebtn = document.getElementById('closebtn');

hamburger.addEventListener('click', (event) => {
  menu.classList.toggle('nav-mobile');
});

closebtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});

navButton.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});
