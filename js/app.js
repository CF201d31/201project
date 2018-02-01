'use strict';

var getForm = document.getElementById('nameDate');
var drinkingDate = new Date();
var yearsAgo = drinkingDate.getFullYear() - 21;
drinkingDate.setFullYear(yearsAgo);

function handleClick(event) {
  event.preventDefault();
  var userName = event.target.name.value;
  var birthDate = event.target.userBirthDate.value;
  localStorage.setItem('userName',userName);
  determineDrinkingAge(new Date(birthDate + 'PST'));
}

function determineDrinkingAge(birthDate) {
  if(birthDate <= drinkingDate) {
    window.location.replace('questions.html');
  } else {
    alert('Sorry, Charlie. You\'re not old enough to play!');
  }
}

getForm.addEventListener('submit', handleClick);