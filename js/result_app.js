'use strict';

// global variables
// get results from local storage

var displayImg = document.getElementById('results-img');

var questions = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
  yes: 2,
  no: 1,
  noKid: 0,
  oneKid: 1,
  twoKids: 2,
  threeKids: 3,
  fourPlusKids: 4,
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  rich: 1,
  stable: 2,
  payCheck: 3,
  maxed: 4,
  student: 5,
  pastDue: 6,
  carRepo: 7,
  morning: 1,
  afternoon: 2,
  evening: 3,
  partyTime: 4,
  lateNight: 5,
  noDrink: 1,
  oneDrink: 2,
  twoDrinks: 3,
  threePlusDrinks: 4,
  noStress: 1,
  oneStress: 2,
  twoStress: 3,
  threeStress: 4,
  fourStress: 5,
  fiveStress: 6,
};




function getAnswers() {
  var fAnswers = JSON.parse(localStorage.answers);
  var answerTotal = 0;
  for(var i = 0; i < fAnswers.length; i++) {
    console.log(questions[fAnswers[i]]);
    answerTotal += questions[fAnswers[i]];
  }
  return answerTotal;
}

function getImg(answerTotal) {
  if(answerTotal < 7 ){
    return 'img/half-full.gif';
  } else if(answerTotal < 12) {
    return 'img/mimosa.jpg';
  } else if(answerTotal < 17) {
    return 'img/beer.gif';
  } else if(answerTotal < 22) {
    return 'img/icetea.jpg';
  } else if(answerTotal < 27) {
    return 'img/straightwhiskey.png';
  } else if(answerTotal < 32) {
    return 'img/amf.jpg';
  } else {
    return 'img/half-full.gif';
  }
}

var total = getAnswers();

displayImg.src = getImg(total);


