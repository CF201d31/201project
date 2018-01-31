'use strict';

// global variables
var imgEl = document.getElementById('results-img');
var titleEl = document.getElementById('result-title');
var blurbEl = document.getElementById('results-blurb');

// object to value answer
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

// get answers from local storage and assign a score
function getAnswers() {
  var fAnswers = JSON.parse(localStorage.answers);
  var answerTotal = 0;
  for (var i = 0; i < fAnswers.length; i++) {
    answerTotal += questions[fAnswers[i]];
  }
  getImg(answerTotal);
}

// drink object constructor 
function DrinkInfo(image, title, blurb) {
  this.image = image;
  this.title = title;
  this.blurb = blurb;
}

// which drink displays depending on total score
function getImg(answerTotal) {
  if (answerTotal < 7 ) {
    imgEl.src = water.image;
    titleEl.textContent = water.title;
    blurbEl.textContent = water.blurb;
  } else if (answerTotal < 9) {
    imgEl.src = beer.image;
    titleEl.textContent = beer.title;
    blurbEl.textContent = beer.blurb;
  } else if (answerTotal < 11) {
    imgEl.src = mimosa.image;
    titleEl.textContent = mimosa.title;
    blurbEl.textContent = mimosa.blurb;
  } else if (answerTotal < 13) {
    imgEl.src = wine.image;
    titleEl.textContent = wine.title;
    blurbEl.textContent = wine.blurb;
  } else if (answerTotal < 15) {
    imgEl.src = bloodyMary.image;
    titleEl.textContent = bloodyMary.title;
    blurbEl.textContent = bloodyMary.blurb;
  } else if (answerTotal < 17) {
    imgEl.src = amf.image;
    titleEl.textContent = amf.title;
    blurbEl.textContent = amf.blurb;
  } else if (answerTotal < 19) {
    imgEl.src = tequila.image;
    titleEl.textContent = tequila.title;
    blurbEl.textContent = tequila.blurb;
  } else if (answerTotal < 21) {
    imgEl.src = vodkaRedbull.image;
    titleEl.textContent = vodkaRedbull.title;
    blurbEl.textContent = vodkaRedbull.blurb;
  } else if (answerTotal < 23) {
    imgEl.src = whiskey.image;
    titleEl.textContent = whiskey.title;
    blurbEl.textContent = whiskey.blurb;
  } else if (answerTotal < 25) {
    imgEl.src = margarita.image;
    titleEl.textContent = margarita.title;
    blurbEl.textContent = margarita.blurb;
  } else if (answerTotal < 27) {
    imgEl.src = icedTea.image;
    titleEl.textContent = icedTea.title;
    blurbEl.textContent = icedTea.blurb;
  } else if (answerTotal < 29) {
    imgEl.src = jackCoke.image;
    titleEl.textContent = jackCoke.title;
    blurbEl.textContent = jackCoke.blurb;
  } else {
    imgEl.src = water.image;
    titleEl.textContent = water.title;
    blurbEl.textContent = water.blurb;
  }
}

// make drink objects
var water = new DrinkInfo('img/water.jpg', 'Water', 'Can\'t go wrong with H20!');
var mimosa = new DrinkInfo('img/mimosa.jpg', 'Mimosa', 'Mimosa - Composed of one part champagne and one part chilled citrus juice, this drink is what you need to get your weekend funday kick-off. Traditionally served in a tall champagne flute, this brunch favorite will provide you a free-pass to get the party started early before noon!');
var bloodyMary = new DrinkInfo('img/bloody-mary.jpg', 'Bloody Mary', 'Known throughout as the perfect hangover cure, the Bloody Mary is just what you need to ease into the day after a rough night. Made from tomato juice, hot sauce, Worcestershire sauce, horseradish, celery, olives, salt, black pepper, and lemon juice this vodka-soaked blend also provides a nutritional element to your pick-me-up as well!');
var beer = new DrinkInfo('img/beer.jpg', 'Beer', 'The classic brew is always the perfect go-to for any occasion and also the most widely consumed alcoholic drink in the world. Just sit back, relax, and have a cold brewsky.');
var amf = new DrinkInfo('img/AMF.jpg', 'AMF', 'You’ve had a hard week and you are ready to escape!  They don\'t call this “Adios M-Effer” for nothing. Made from vodka, gin, rum, and triple sec with ice, this is one sure fire way to check-out from the mundane for the night.');
var tequila = new DrinkInfo('img/tequila-shot.jpg', 'Shot', 'Take everything in moderation, including moderation!');
var vodkaRedbull = new DrinkInfo('img/vodka-redbull.jpg', 'Vodka Redbull', 'Perfect for the hard working professional who still wants to champion through the night, the Vodka Redbull never fails to provide you with a much needed second wind. Kill two birds with one stone, and kiss your fatigue and stress goodbye!');
var jackCoke = new DrinkInfo('img/jackandcoke.jpg', 'Jack and Coke', 'You\'ve been through some tough obstacles this week, and this whiskey and cola mix is just what you need to dial down. The strength and acquired taste of the whiskey is drowned in ten ounces of cola, just enough to momentarily drown your troubles away.');
var whiskey = new DrinkInfo('img/straightwhiskey.png', 'Straight Whiskey', 'Whiskey is good');
var margarita = new DrinkInfo('img/margarita.jpg', 'Margarita', 'The sun is out and outdoor dining is calling your name. A margarita is just what you need to unwind! Consisting of tequila, triple sec, and lime juice, this drink can be served frozen or on the rocks.');
var wine = new DrinkInfo('img/wine.jpg', 'Wine', 'Relax with a nice glass of wine.');
var icedTea = new DrinkInfo('img/icetea.jpg', 'Long Island Iced Tea', 'A combination of innocent name-branding and high alcohol concentration makes this deceptive drink a pleasant surprise. Made from vodka, tequila, light rum, triple sec, gin, and a splash of cola for color, this beverage will sneak up on you just like the weekend!');

getAnswers();


// var hotToddy = new DrinkInfo('img/hot-toddy.jpg', 'Hot Toddy', 'Hot Toddy blurb');
// imgEl.src = hotToddy.image;
// titleEl.textContent = hotToddy.title;
// blurbEl.textContent = hotToddy.blurb;