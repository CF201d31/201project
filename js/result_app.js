'use strict';

// global variables
// get results from local storage

var displayImg = document.getElementById('results-img');
var titleEl = document.getElementById('result-title');
var blurbEl = document.getElementById('results-blurb');

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

function DrinkInfo(blurb, title, drink) {
  this.blurb = blurb;
  this.title = title;
  this.drink = drink;
}

var water = new DrinkInfo('Water - composed of H20 and sobers you up. We suggest you have a water right now instead of more alcohol.', 'Water', 'img/half-full.gif');
var mimosa = new DrinkInfo('Mimosa - Composed of one part champagne and one part chilled citrus juice, this drink is what you need to get your weekend funday kick-off. Traditionally served in a tall champagne flute, this brunch favorite will provide you a free-pass to get the party started early before noon!', 'Mimosa', 'img/mimosa.jpg');



// ['','img/half-full.gif'];
function getImg(answerTotal) {
  if(answerTotal < 7 ){
    titleEl.textContent = water.title;
    blurbEl.textContent = drinkData.blurb;
    titleEl.textContent = drinkData.title;

    return water;//['','img/half-full.gif'];
  } else if(answerTotal < 12) {
    return ['Have A Mimosa','img/mimosa.jpg'];
  } else if(answerTotal < 17) {
    return ['Have A Beer','img/beer.gif'];
  } else if(answerTotal < 22) {
    return water; //,'img/icetea.jpg'];
  } else if(answerTotal < 27) {
    return ['Have a Shot Of Whiskey','img/straightwhiskey.png'];
  } else if(answerTotal < 32) {
    return ['You\'ve Had a Stressful Day','img/amf.jpg'];
  } else {
    return ['You just need water at this point','img/half-full.gif'];
  }
}


titleEl.textContent = mimosa.title;

var total = getAnswers();

var drinkData = getImg(total);

displayImg.src = drinkData.drink;




console.log(drinkData.blurb)




