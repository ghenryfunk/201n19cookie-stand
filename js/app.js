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
      var cookiesSold = Math.floor(
        randomNum(this.minCust, this.maxCust) * this.avgCookies
      );
      this.hourlyCookieArray.push(cookiesSold);
      this.totalCookies += cookiesSold;
    }
  },
  render() {
    this.cookieCalc();
    var parentEl = document.getElementById('Seattle'); //does NOT work w/ getElementsByTagName
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
  },
};
seattle.render();

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
      var cookiesSold = Math.floor(
        randomNum(this.minCust, this.maxCust) * this.avgCookies
      );
      this.hourlyCookieArray.push(cookiesSold);
      this.totalCookies += cookiesSold;
    }
  },
  render() {
    this.cookieCalc();
    var parentEl = document.getElementById('Tokyo'); //does NOT work w/ getElementsByTagName
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
  },
};
tokyo.render();

// // // console.log(tokyo);

// // ///////////////////DUBAI/////////////////////////////
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
  render() {
    this.cookieCalc();
    var parentEl = document.getElementById('Dubai'); //does NOT work w/ getElementsByTagName
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
  },
};
dubai.render();

// // // console.log(dubai);

// ////////////////////PARIS/////////////////////////////
var paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourlyCookieArray: [],
  totalCookies: 0,
  cookieCalc: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSold = Math.floor(randomNum(this.minCust, this.maxCust) * this.avgCookies);
      this.hourlyCookieArray.push(cookiesSold);
      this.totalCookies += cookiesSold;
    }
  },
  render() {
    this.cookieCalc();
    var parentEl = document.getElementById('Paris'); //does NOT work w/ getElementsByTagName
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
  },
};
paris.render();

// // // console.log(paris);

// ////////////////////LIMA/////////////////////////////
var lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlyCookieArray: [],
  totalCookies: 0,
  cookieCalc: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSold = Math.floor(randomNum(this.minCust, this.maxCust) * this.avgCookies);
      this.hourlyCookieArray.push(cookiesSold);
      this.totalCookies += cookiesSold;
    }
  },
  render() {
    this.cookieCalc();
    var parentEl = document.getElementById('Lima'); //does NOT work w/ getElementsByTagName
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
  },
};
lima.render();

// // // console.log(lima);
