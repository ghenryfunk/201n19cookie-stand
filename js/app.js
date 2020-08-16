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

var storeArray = [];
var theadEl = document.getElementById('thead');
var tbodyEl = document.getElementById('tbody');
var tfootEl = document.getElementById('tfoot');
var newStore = document.getElementById('newStore');

// console.log(storeArray);

// var hourlyTotalsArray = [];

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
  // this.render();

  storeArray.push(this);
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

function createElement(element, textContent, parent) {
  var newElement = document.createElement(element);
  newElement.textContent = textContent;
  parent.appendChild(newElement);
  return newElement;
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.target);
  var location = event.target.newlocation.value;
  var minCust = event.target.mincust.value;
  var maxCust = event.target.maxcust.value;
  var avgCookies = event.target.avgcookies.value;

  new Store(location, minCust, maxCust, avgCookies);

  event.target.newlocation.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcookies.value = null;

  renderTable();
  renderFooter();
}

newStore.addEventListener('submit', handleSubmit);

function renderHeader() {
  var trHoursEl = createElement('tr', '', theadEl);
  createElement('th', '', trHoursEl);
  for (var i = 0; i < storeHours.length; i++) {
    createElement('th', storeHours[i], trHoursEl);
  }
  createElement('th', 'Daily Location Total', trHoursEl);
}
renderHeader();

function renderTable() {
  tbodyEl.textContent = ''; // wipe the table body so we can add new stores and refresh the totals
  for (var j = 0; j < storeArray.length; j++) {
    var trStoreEl = createElement('tr', '', tbodyEl);
    createElement('td', storeArray[j].location, trStoreEl);
    for (var i = 0; i < storeHours.length; i++) {
      createElement('td', storeArray[j].hourlyCookieArray[i], trStoreEl);
    }
    createElement('td', storeArray[j].totalCookies, trStoreEl);
  }
}
renderTable();

function renderFooter() {
  tfootEl.textContent = ''; // wipe the footer so we can add new stores and refresh the total in the footer
  var trTotals = createElement('tr', '', tfootEl);
  createElement('td', 'Totals', trTotals);
  var grandTotal = 0;
  for (var i = 0; i < storeHours.length; i++) {
    var hourlyTotals = 0;
    for (var j = 0; j < storeArray.length; j++) {
      hourlyTotals += storeArray[j].hourlyCookieArray[i];
      grandTotal += storeArray[j].hourlyCookieArray[i];
    }
    createElement('td', hourlyTotals, trTotals);
  }
  createElement('td', grandTotal, trTotals);
}
renderFooter();
