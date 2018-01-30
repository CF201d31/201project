'use strict';

// global variables
var fAnswers = localStorage.answers.split(',');
// get results from local storage


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
  twoKid: 2,
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
  p2p: 3,
  maxcc: 4,
  collegeL: 5,
  billPast: 6,
  carRepoNFor: 7,
  morning: 1,
  afternoon: 2,
  evening: 3,
  partyTime: 4,
  lateNight: 5,
  noDrink: 1,
  oneDrink: 2,
  twoDrinks: 3,
  threePlusDrinks: 4,
  
};

// functions

// function call to render page
