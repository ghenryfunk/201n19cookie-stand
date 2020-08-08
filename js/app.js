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

function Store(location, minCust, maxCust, avgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyCookieArray = [];
  this.totalCookies = 0;
  this.cookieCalc();
  this.render();
}

Store.prototype.cookieCalc = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var cookiesSold = Math.floor(
      randomNum(this.minCust, this.maxCust) * this.avgCookies
    );
    this.hourlyCookieArray.push(cookiesSold);
    this.totalCookies += cookiesSold;
  }
};

Store.prototype.render = function () {
  this.cookieCalc();
  var parentEl = document.getElementById(`${this.location}`); //does NOT work w/ getElementsByTagName
  var childEl = document.createElement('ul');
  childEl.textContent = `${this.location}`;
  parentEl.insertBefore(childEl, parentEl.firstChild);

  for (var i = 0; i < storeHours.length; i++) {
    var newEl = document.createElement('li');
    // var newText = document.createTextNode(storeHours);
    newEl.textContent = `${storeHours[i]}: ${this.hourlyCookieArray[i]} cookies`;
    // newEl.appendChild(newText);
    parentEl.appendChild(newEl);
  }

  var newEl2 = document.createElement('li');
  newEl2.textContent = `Total: ${this.totalCookies} cookies`;
  parentEl.appendChild(newEl2);
};

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

