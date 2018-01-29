'use strict';

var getForm = document.getElementById('nameDate');
var currentDate = new Date();


function handleClick(event) {
  event.preventDefault();
  var userName = event.target.name.value;
  var birthDate = event.target.userBirthDate.value;
  localStorage.setItem('userName',userName);
}


getForm.addEventListener('submit', handleClick);

