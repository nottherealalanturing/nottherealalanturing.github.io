let hamburger = document.getElementById("nav-button");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", (event) => {
  menu.classList.toggle("nav-mobile");
});
