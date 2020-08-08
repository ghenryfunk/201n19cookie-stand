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

console.log(seattle);

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

// // // console.log(tokyo);

// // ///////////////////DUBAI/////////////////////////////
// var dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
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
// dubai.cookieCalc();
// var positionDubai = document.getElementById('dubai'); //does NOT work w/ getElementsByTagName
// var dubaiList = document.createElement('ul');
// dubaiList.textContent = `${dubai.location}`;
// positionDubai.insertBefore(dubaiList, positionDubai.firstChild);

// for (var i = 0; i < storeHours.length; i++) {
//   var newElDubai = document.createElement('li');
//   // var newText = document.createTextNode(storeHours);
//   newElDubai.textContent = `${storeHours[i]}: ${dubai.hourlyCookieArray[i]} cookies`;
//   // newEl.appendChild(newText);
//   positionDubai.appendChild(newElDubai);
// }

// var totalCookiesDubai = document.createElement('li');
// totalCookiesDubai.textContent = `Total: ${dubai.totalCookies} cookies`;
// positionDubai.appendChild(totalCookiesDubai);

// // // console.log(dubai);

// ////////////////////PARIS/////////////////////////////
// var paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
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
// paris.cookieCalc();
// var positionParis = document.getElementById('paris'); //does NOT work w/ getElementsByTagName
// var parisList = document.createElement('ul');
// parisList.textContent = `${paris.location}`;
// positionParis.insertBefore(parisList, positionParis.firstChild);

// for (var i = 0; i < storeHours.length; i++) {
//   var newElParis = document.createElement('li');
//   // var newText = document.createTextNode(storeHours);
//   newElParis.textContent = `${storeHours[i]}: ${paris.hourlyCookieArray[i]} cookies`;
//   // newEl.appendChild(newText);
//   positionParis.appendChild(newElParis);
// }

// var totalCookiesParis = document.createElement('li');
// totalCookiesParis.textContent = `Total: ${paris.totalCookies} cookies`;
// positionParis.appendChild(totalCookiesParis);

// // // console.log(paris);

// ////////////////////LIMA/////////////////////////////
// var lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
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
// lima.cookieCalc();
// var positionLima = document.getElementById('lima'); //does NOT work w/ getElementsByTagName
// var limaList = document.createElement('ul');
// limaList.textContent = `${lima.location}`;
// positionLima.insertBefore(limaList, positionLima.firstChild);

// for (var i = 0; i < storeHours.length; i++) {
//   var newElLima = document.createElement('li');
//   // var newText = document.createTextNode(storeHours);
//   newElLima.textContent = `${storeHours[i]}: ${lima.hourlyCookieArray[i]} cookies`;
//   // newEl.appendChild(newText);
//   positionLima.appendChild(newElLima);
// }

// var totalCookiesLima = document.createElement('li');
// totalCookiesLima.textContent = `Total: ${lima.totalCookies} cookies`;
// positionLima.appendChild(totalCookiesLima);

// // // console.log(lima);
