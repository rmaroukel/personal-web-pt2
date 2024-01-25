// //CSS Imports
// import '../styles/input.css';
// import '../styles/style.css';

//Console Log
console.log("Hello World, this is my contact page.");

//Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-visible');
});

//Contact Forms
const form = document.querySelector('#contact-form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/src/success.html'
})