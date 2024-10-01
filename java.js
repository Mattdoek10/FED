let deButton = document.querySelector("header button:last-of-type");
let deNav = document.querySelector("nav")
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}