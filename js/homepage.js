'use strict';
console.log('hello world');

function createElement(element, textContent, parent) {
  var newElement = document.createElement(element);
  newElement.textContent = textContent;
  parent.appendChild(newElement);
  return newElement;
}

var theadElHome = document.getElementById('theadhome');
var tbodyElHome = document.getElementById('tbodyhome');
var tfootElHome = document.getElementById('tfoothome');

console.log(renderHomepageTable);

function renderHomepageTable() {
  var trHead = createElement('tr', '', theadElHome);
  createElement('td', 'Location', trHead);
  createElement('td', 'Address', trHead);
  createElement('td', 'Hours', trHead);

  var trBody1 = createElement('tr', '', tbodyElHome);
  createElement('td', 'Seattle', trBody1);
  createElement('td', '123 Cool St.', trBody1);
  createElement('td', '6am-8pm', trBody1);
  var trBody2 = createElement('tr', '', tbodyElHome);
  createElement('td', 'Tokyo', trBody2);
  createElement('td', '456 東京都', trBody2);
  createElement('td', '6am-8pm', trBody2);
  var trBody3 = createElement('tr', '', tbodyElHome);
  createElement('td', 'Dubai', trBody3);
  createElement('td', '789 دبي', trBody3);
  createElement('td', '6am-8pm', trBody3);
  var trBody4 = createElement('tr', '', tbodyElHome);
  createElement('td', 'Paris', trBody4);
  createElement('td', '135 Boulangerie', trBody4);
  createElement('td', '6am-8pm', trBody4);
  var trBody5 = createElement('tr', '', tbodyElHome);
  createElement('td', 'Lima', trBody5);
  createElement('td', '579 Panadería', trBody5);
  createElement('td', '6am-8pm', trBody5);

  var trFoot = createElement('tr', '', tfootElHome);
  createElement('td', 'Call Us: ', trFoot);
  createElement('td', '1 (800) FOR-FISH', trFoot);
  createElement('td', '', trFoot);
}

renderHomepageTable();
