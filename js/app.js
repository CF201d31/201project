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
  // debugger;
  console.log(typeof birthDate);
}

function determineDrinkingAge(birthDate) {
  if(birthDate <= drinkingDate) {
    console.log('over 21');
  } else {
    console.log('No alc for you');
  }
  
}

getForm.addEventListener('submit', handleClick);

