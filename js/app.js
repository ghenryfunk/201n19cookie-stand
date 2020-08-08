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
var tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
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
tokyo.cookieCalc();
var positionTokyo = document.getElementById('tokyo'); //does NOT work w/ getElementsByTagName
var tokyoList = document.createElement('ul');
tokyoList.textContent = `${tokyo.location}`;
positionTokyo.insertBefore(tokyoList, positionTokyo.firstChild);

for (var i = 0; i < storeHours.length; i++) {
  var newElTokyo = document.createElement('li');
  // var newText = document.createTextNode(storeHours);
  newElTokyo.textContent = `${storeHours[i]}: ${tokyo.hourlyCookieArray[i]} cookies`;
  // newEl.appendChild(newText);
  positionTokyo.appendChild(newElTokyo);
}

var totalCookiesTokyo = document.createElement('li');
totalCookiesTokyo.textContent = `Total: ${tokyo.totalCookies} cookies`;
positionTokyo.appendChild(totalCookiesTokyo);

// // console.log(seattle);

// ///////////////////DUBAI/////////////////////////////
var dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
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
dubai.cookieCalc();
var positionDubai = document.getElementById('dubai'); //does NOT work w/ getElementsByTagName
var dubaiList = document.createElement('ul');
dubaiList.textContent = `${dubai.location}`;
positionDubai.insertBefore(dubaiList, positionDubai.firstChild);

for (var i = 0; i < storeHours.length; i++) {
  var newElDubai = document.createElement('li');
  // var newText = document.createTextNode(storeHours);
  newElDubai.textContent = `${storeHours[i]}: ${dubai.hourlyCookieArray[i]} cookies`;
  // newEl.appendChild(newText);
  positionDubai.appendChild(newElDubai);
}

var totalCookiesDubai = document.createElement('li');
totalCookiesDubai.textContent = `Total: ${dubai.totalCookies} cookies`;
positionDubai.appendChild(totalCookiesDubai);

// // console.log(seattle);