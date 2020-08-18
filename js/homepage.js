'use strict';

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

var contactArray = [];

function ContactInfo(location, address, hours) {
  this.location = location;
  this.address = address;
  this.hours = hours;

  contactArray.push(this);
}

new ContactInfo('Seattle', '123 Cool St.', '6am-8pm');
new ContactInfo('Tokyo', '456 東京都', '6am-8pm');
new ContactInfo('Dubai', '789 Dubai St', '6am-8pm');
new ContactInfo('Paris', '135 Boulangerie', '6am-8pm');
new ContactInfo('Lima', '579 Panadería', '6am-8pm');

console.log(contactArray);

function renderHomepageTable() {
  var trHead = createElement('tr', '', theadElHome);
  createElement('td', 'Location', trHead);
  createElement('td', 'Address', trHead);
  createElement('td', 'Hours', trHead);

  function renderContact() {
    for (var i = 0; i < contactArray.length; i++) {
      var trBody1 = createElement('tr', '', tbodyElHome);
      createElement('td', contactArray[i].location, trBody1);
      createElement('td', contactArray[i].address, trBody1);
      createElement('td', contactArray[i].hours, trBody1);
    }
  }
  renderContact();
 

  var trFoot = createElement('tr', '', tfootElHome);
  createElement('td', 'Call Us: ', trFoot);
  createElement('td', '1 (800) FOR-FISH', trFoot);
  createElement('td', '', trFoot);
}

renderHomepageTable();
