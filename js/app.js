'use strict';

var storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} //THIS MIGHT NEED TO BE LOCAL!!
// console.log(randomNum);

///////////////////SEATTLE/////////////////////////////
var seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlyCookieArray: [],
  totalCookies: 0,
  cookieCalc: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSold = Math.floor(randomNum(this.minCust, this.maxCust) * this.avgCookies);
      this.hourlyCookieArray.push(cookiesSold);
      this.totalCookies += cookiesSold;
    }
  },
};
seattle.cookieCalc();
var position = document.getElementById('seattle'); //does NOT work w/ getElementsByTagName
var seattleList = document.createElement('ul');
seattleList.textContent = `${seattle.location}`;
position.insertBefore(seattleList, position.firstChild);

for (var i = 0; i < storeHours.length; i++) {
  var newEl = document.createElement('li');
  // var newText = document.createTextNode(storeHours);
  newEl.textContent = `${storeHours[i]}: ${seattle.hourlyCookieArray[i]} cookies`;
  // newEl.appendChild(newText);
  position.appendChild(newEl);
}

var totalCookies = document.createElement('li');
totalCookies.textContent = `Total: ${seattle.totalCookies} cookies`;
position.appendChild(totalCookies);

// console.log(seattle);

// ///////////////////TOKYO/////////////////////////////
// var tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   hourlyCookieArray: [],
//   totalCookies: 0,
//   cookieCalc: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var cookiesSold = Math.floor(randomNum(this.minCust, this.maxCust) * this.avgCookies);
//       this.hourlyCookieArray.push(cookiesSold);
//       this.totalCookies += cookiesSold;
//     }
//   },
// };
// tokyo.cookieCalc();
// var positionTokyo = document.getElementById('tokyo'); //does NOT work w/ getElementsByTagName
// var tokyoList = document.createElement('ul');
// tokyoList.textContent = `${tokyo.location}`;
// positionTokyo.insertBefore(tokyoList, positionTokyo.firstChild);

// for (var i = 0; i < storeHours.length; i++) {
//   var newElTokyo = document.createElement('li');
//   // var newText = document.createTextNode(storeHours);
//   newElTokyo.textContent = `${storeHours[i]}: ${tokyo.hourlyCookieArray[i]} cookies`;
//   // newEl.appendChild(newText);
//   position.appendChild(newElTokyo);
// }

// var totalCookiesTokyo = document.createElement('li');
// totalCookies.textContent = `Total: ${tokyo.totalCookiesTokyo} cookies`;
// position.appendChild(totalCookiesTokyo);

// // console.log(seattle);

