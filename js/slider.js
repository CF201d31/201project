'use strict';

var divEl = document.getElementById('slide-container');
var h3El = document.getElementById('drink-name');
var pEl = document.getElementById('drink-blurb');

//get drink blurbs from local storage
var allDrinks = JSON.parse(localStorage.allDrinks);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) { //eslint-disable-line
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slides');
  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
  h3El.textContent = x[slideIndex - 1].alt;
}

function imgClick(event) {
  // if target has an alt tag, display drink blurb
  if (event.target.alt) {
    for (var i in allDrinks) {
      if (allDrinks[i].title === event.target.alt) {
        pEl.textContent = allDrinks[i].blurb;
      }
    }
    // else if click arrow to scroll
  } else {
    pEl.textContent = '';
  }
}

divEl.addEventListener('click', imgClick);