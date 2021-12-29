'use strict';

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const operate = function (operator, num1, num2) {
  if (operator === 'add') {
    return add(num1, num2);
  } else if (operator === 'subtract') {
    return subtract(num1, num2);
  } else if (operator === 'multiply') {
    return multiply(num1, num2);
  } else if (operator === 'divide') {
    return divide(num1, num2);
  }
};

const blankScreenUp = document.querySelector('.screen2');
const blankScreen = document.querySelector('.screen1');
const buton1 = document.querySelector('.btn-1');
const buton2 = document.querySelector('.btn-2');
const buton3 = document.querySelector('.btn-3');
const buton4 = document.querySelector('.btn-4');
const buton5 = document.querySelector('.btn-5');
const buton6 = document.querySelector('.btn-6');
const buton7 = document.querySelector('.btn-7');
const buton8 = document.querySelector('.btn-8');
const buton9 = document.querySelector('.btn-9');
const buton0 = document.querySelector('.btn-0');
const butonAdd = document.querySelector('.btn-a');
const butonSubtract = document.querySelector('.btn-s');
const butonDivide = document.querySelector('.btn-d');
const butonMultiply = document.querySelector('.btn-m');
const butonDot = document.querySelector('.btn-dot');
const butonEqual = document.querySelector('.btn-e');

let primaryValue = '';
let secondaryValue = '';
let operator = '';
const del = /[\W_]/g;
buton1.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}1`;
});
buton2.addEventListener('click', function () {
  for (let i = 0; i < 1; i++) {
    blankScreen.textContent += '2';
  }
});
buton3.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}3`;
});
buton4.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}4`;
});
buton5.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}5`;
});
buton6.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}6`;
});
buton7.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}7`;
});
buton8.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}8`;
});
buton9.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}9`;
});
buton0.addEventListener('click', function () {
  blankScreen.textContent = `${blankScreen.textContent}0`;
});
butonDot.addEventListener('click', function () {
  blankScreen.textContent = '.';
});
////
butonAdd.addEventListener('click', function () {
  operator = 'add';
  if (blankScreenUp.textContent.includes('+')) {
    secondaryValue = Number(blankScreen.textContent.replace(del, ''));
    for (let i = 0; i < 1; i++) {
      blankScreenUp.textContent = `${add(primaryValue, secondaryValue)} + `;
      blankScreen.textContent = `${add(primaryValue, secondaryValue)}`;
    }
  } else {
    primaryValue = Number(blankScreen.textContent.replace(del, ''));
    blankScreenUp.textContent = `${primaryValue} + `;
    blankScreen.textContent = `${secondaryValue}`;
    secondaryValue = Number(blankScreen.textContent.replace(del, ''));
  } // blankScreen.textContent = `${operate(
  //   operator,
  //   primaryValue,
  //   secondaryValue
  // )}`;
});
////
butonMultiply.addEventListener('click', function () {
  primaryValue = Number(blankScreen.textContent.replace(del, ''));
  operator = 'multiply';
  blankScreenUp.textContent = `${primaryValue} * `;
  blankScreen.textContent = `${secondaryValue}`;
});
////
butonSubtract.addEventListener('click', function () {
  primaryValue = Number(blankScreen.textContent.replace(del, ''));
  operator = 'subtract';
  blankScreenUp.textContent = `${primaryValue} - `;
  blankScreen.textContent = `${secondaryValue}`;
});
////
butonDivide.addEventListener('click', function () {
  primaryValue = Number(blankScreen.textContent.replace(del, ''));
  operator = 'divide';
  blankScreenUp.textContent = `${primaryValue} / `;
  blankScreen.textContent = `${secondaryValue}`;
});
////
butonEqual.addEventListener('click', function () {
  blankScreenUp.textContent = `${
    blankScreenUp.textContent + blankScreen.textContent
  } =`;
  secondaryValue = Number(blankScreen.textContent.replace(del, ''));
  console.log(operate(operator, primaryValue, secondaryValue));
  blankScreen.textContent = `${operate(
    operator,
    primaryValue,
    secondaryValue
  )}`;
});

const screenPopulate = function () {};
