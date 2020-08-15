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


var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

var theadEl = document.getElementById('thead');
var tbodyEl = document.getElementById('tbody');
var tfootEl = document.getElementById('tfoot');

function createElement(element, textContent, parent) {
  var newElement = document.createElement(element);
  newElement.textContent = textContent;
  parent.appendChild(newElement);
  return newElement;
}

function renderHeader() {
  var trHoursEl = createElement('tr', '', theadEl);
  // var trHoursEl = document.createElement('tr');
  // theadEl.appendChild(trHoursEl);
  createElement('th', '', trHoursEl);
  // var thSpaceFiller = document.createElement('th');
  // thSpaceFiller.textContent = '';
  // trHoursEl.appendChild(thSpaceFiller);
  
  for (var i = 0; i < storeHours.length; i++) {
    createElement('th', storeHours[i], trHoursEl);
    // var thHoursEl = document.createElement('th');
    // thHoursEl.textContent = storeHours[i];
    // trHoursEl.appendChild(thHoursEl);
  }
  createElement('th', 'Daily Location Total', trHoursEl);
  // var thDailyTotals = document.createElement('th');
  // thDailyTotals.textContent = 'Daily Location Total';
  // trHoursEl.appendChild(thDailyTotals);
}
renderHeader();

function renderTable() {
  for (var j = 0; j < storeArray.length; j++) {
    var trStoreEl = createElement('tr', '', tbodyEl);
    // var trStoreEl = document.createElement('tr');
    // tbodyEl.appendChild(trStoreEl);
    createElement('td', storeArray[j].location, trStoreEl);
    // var tdStoreEl = document.createElement('td');
    // tdStoreEl.textContent = storeArray[j].location;
    // trStoreEl.appendChild(tdStoreEl);
    for (var i = 0; i < storeHours.length; i++) {
      createElement('td', storeArray[j].hourlyCookieArray[i], trStoreEl);
      // var tdCookiesEl = document.createElement('td');
      // tdCookiesEl.textContent = storeArray[j].hourlyCookieArray[i];
      // trStoreEl.appendChild(tdCookiesEl);
    }
    createElement('td', storeArray[j].totalCookies, trStoreEl);
    // var tdCookieTotals = document.createElement('td');
    // tdCookieTotals.textContent = storeArray[j].totalCookies;
    // trStoreEl.appendChild(tdCookieTotals);
  }
}
renderTable();

function renderFooter() {
  var trTotals = createElement('tr', '', tfootEl);
  // var trTotals = document.createElement('tr');
  // tfootEl.appendChild(trTotals);
  createElement('td', 'Totals', trTotals);
  // var tdTotals = document.createElement('td');
  // tdTotals.textContent = 'Totals';
  // trTotals.appendChild(tdTotals);
  var grandTotal = 0;
  for (var i = 0; i < storeHours.length; i++) {
    var hourlyTotals = 0;
    for (var j = 0; j < storeArray.length; j++) {
      hourlyTotals += storeArray[j].hourlyCookieArray[i];
      grandTotal += storeArray[j].hourlyCookieArray[i];
    }
    createElement('td', hourlyTotals, trTotals);
    // var tdHourlyTotals = document.createElement('td');
    // tdHourlyTotals.textContent = hourlyTotals;
    // trTotals.appendChild(tdHourlyTotals);
  }
  createElement('td', grandTotal, trTotals);
  // var tdGrandTotal = document.createElement('td');
  // tdGrandTotal.textContent = grandTotal;
  // trTotals.appendChild(tdGrandTotal);
}
renderFooter();

// hourlyTotalsArray.push(hourlyTotals);
// Take away the hourly totals array? Do I have to put this all inside a render function?





// Store.prototype.render = function () {
//   this.cookieCalc();
//   var parentEl = document.getElementById(`${this.location}`); //does NOT work w/ getElementsByTagName
//   var childEl = document.createElement('ul');
//   childEl.textContent = `${this.location}`;
//   parentEl.insertBefore(childEl, parentEl.firstChild);

//   for (var i = 0; i < storeHours.length; i++) {
//     var newEl = document.createElement('li');
//     // var newText = document.createTextNode(storeHours);
//     newEl.textContent = `${storeHours[i]}: ${this.hourlyCookieArray[i]} cookies`;
//     // newEl.appendChild(newText);
//     parentEl.appendChild(newEl);
//   }

//   var newEl2 = document.createElement('li');
//   newEl2.textContent = `Total: ${this.totalCookies} cookies`;
//   parentEl.appendChild(newEl2);
// };
