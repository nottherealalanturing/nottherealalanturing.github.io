const hamburger = document.getElementById('nav-button');
const menu = document.getElementById('menu');
const navButton = document.getElementById('nav-button');
const closebtn = document.getElementById('closebtn');
const menuItems = Array.from(
  document.getElementById('overlay-content').children
);

menuItems.forEach((li) => {
  li.addEventListener('click', () => {
    document.getElementById('myNav').style.width = '0%';
    document.getElementById('body').style.overflow = 'auto';
  });
});
hamburger.addEventListener('click', () => {
  menu.classList.toggle('nav-mobile');
});

closebtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('body').style.overflow = 'auto';
});

navButton.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('body').style.overflow = 'hidden';
});
