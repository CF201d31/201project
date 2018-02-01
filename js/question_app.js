'use strict';

var body = document.querySelector('body');
// body.appendChild('<video src="media/Loading Screen.mp4" autoplay ></video>');

var video = document.createElement('video');

video.setAttribute ('src', 'media/Loading Screen.mp4');
video.setAttribute ('autoplay', 'true');
console.log(video);

//get username from local storage
var username = capitalize(localStorage.getItem('userName'));

var questionForm = document.getElementById('question-form');

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

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
  localStorage.setItem('answers', JSON.stringify(answerArray));

  // go to next page
  window.location.href = 'result.html';
}

questionForm.addEventListener('submit', handleQuestion);

displayName();