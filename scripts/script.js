const navButton = document.getElementById('nav-button');
const closebtn = document.getElementById('closebtn');
const mi = document.getElementById('overlay-content').children;
const menuItems = Array.from(mi);

menuItems.forEach((li) => {
  li.addEventListener('click', () => {
    document.getElementById('myNav').style.width = '0%';
    document.getElementById('body').style.overflow = 'auto';
    document.getElementById('headline').classList.remove('blur');
    document.getElementById('container').classList.remove('blur');
  });
});

closebtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('body').style.overflow = 'auto';
  document.getElementById('headline').classList.remove('blur');
  document.getElementById('container').classList.remove('blur');
});

navButton.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('body').style.overflow = 'hidden';
  document.getElementById('headline').classList.add('blur');
  document.getElementById('container').classList.add('blur');
});
