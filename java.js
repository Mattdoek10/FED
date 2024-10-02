let deButton = document.querySelector("header button:last-of-type");
let deNav = document.querySelector("nav")

deButton.onclick = toggleMenu;

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}