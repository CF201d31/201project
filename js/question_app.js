'use strict';

//get username from local storage
var username = localStorage.getItem('userName');

var questionForm = document.getElementById('question-form');

function displayName() {
  var nameField = document.getElementById('name');
  nameField.textContent = 'Hello ' + username + '!';
}

function handleQuestion(event) {
  event.preventDefault();
  // grab form results
  var dayOfWeekQ = event.target.dayOfWeek.value;
  var timeOfDayQ = event.target.timeOfDay.value;
  var marriedQ = event.target.married.value;
  var kidsQ = event.target.kids.value;
  var drinksAlreadyQ = event.target.drinksAlready.value;
  var stressQ = event.target.stress.value;
  var debtQ = event.target.debt.value;
  var answerArray = [dayOfWeekQ, timeOfDayQ, marriedQ, kidsQ, drinksAlreadyQ,stressQ, debtQ];
  //put results in local storage
  localStorage.setItem('answers', answerArray);

  // go to next page
  window.location.href = 'result.html';
}

questionForm.addEventListener('submit', handleQuestion);

displayName();