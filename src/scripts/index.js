//CSS Imports
import '../styles/input.css';
import '../styles/style.css';

//Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-visible');
});


// Console log page name
if (window.location.pathname === "/src/index.html") {
    console.log("Hello World, this is my home page.");
  } else if (window.location.pathname === "/src/about.html") {
    console.log("Hello World, this is my about me page.");
  } else if (window.location.pathname === "/src/projects.html") {
    console.log("Hello World, this is my projects page.");
  } else if (window.location.pathname === "/src/contact.html") {
    console.log("Hello World, this is my contact page.");
  } else {
    console.log("Hello World!");
  }