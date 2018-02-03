'use strict';

var questionForm = document.getElementById('question-form');

// capitalize first letter of username
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function displayName() {
  //get username from local storage
  if (localStorage.userName) {
    var username = capitalize(localStorage.getItem('userName'));
  } else {
    username = 'no user';
  }
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

  //play loading video
  var body = document.querySelector('body');
  var video = document.createElement('video');
  video.setAttribute('src', 'media/LoadingScreen.mp4');
  video.setAttribute('autoplay', 'true');
  questionForm.classList.add('hide');
  body.appendChild(video);
  setTimeout(function() {window.location = 'result.html';}, 3800);
}

questionForm.addEventListener('submit', handleQuestion);

displayName();