'use strict';
//JS below working on by Beverly and Mario
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
  var weatherQ = event.target.weather.value;
  var marriedQ = event.target.married.value;
  var kidsQ = event.target.kids.value;
  var drinksAlreadyQ = event.target.drinksAlready.value;
  var stressQ = event.target.stress.value;
  var debtQ = event.target.debt.value;
  var answerArray = [dayOfWeekQ, timeOfDayQ, weatherQ, marriedQ, kidsQ, drinksAlreadyQ,stressQ, debtQ];
  localStorage.setItem('answers', answerArray);
  // console.log(dayOfWeekQ, timeOfDayQ, weatherQ, marriedQ, kidsQ, drinksAlreadyQ,stressQ, debtQ);

  // go to next page
  window.location.href = 'result.html';
}

questionForm.addEventListener('submit', handleQuestion);

displayName();

// JS below worked on by Jose and Forrest
