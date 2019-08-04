/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

let img = document.querySelector('img');
img.onclick = function() {
  let imgSrc = img.getAttribute('src');
  if (imgSrc === 'images/firefox-icon.png') {
    img.setAttribute('src', 'images/firefox-icon2.png');
  } else {
    img.setAttribute('src', 'images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
