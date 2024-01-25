// setTimeout(() => {
//     console.log("Set Timeout initiated with this location:", window.location.href)
//     window.location.href = window.location.origin + '/src'
// }, 5000)

// Time for timeout in milliseconds
const timeoutDuration = 5000;

// Get the loading bar element
const loadingBar = document.getElementById('loading-bar');

//Loading bar update
const interval = 50;
let elapsed = 0;
const timer = setInterval(() => {
  elapsed += interval;
  const percentage = 100 - (elapsed / timeoutDuration) * 100;
  loadingBar.style.width = percentage + '%';

  //Time
  if (elapsed >= timeoutDuration) {
    clearInterval(timer);
    //Redirect
    window.location.href = window.location.origin + '/src';
  }
}, interval);
