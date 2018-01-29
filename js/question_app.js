'use strict';

var questionForm = document.getElementById('question-form');

//get username from local storage
var username = localStorage.getItem('userName');

function handleQuestion(event) {
  event.preventDefault();
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
}

questionForm.addEventListener('submit', handleQuestion);