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
  if (operator === add) {
    return add(num1, num2);
  } else if (operator === subtract) {
    return subtract(num1, num2);
  } else if (operator === multiply) {
    return multiply(num1, num2);
  } else if (operator === divide) {
    return divide(num1, num2);
  }
};

const blankScreen = document.querySelector('.screen');
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

buton1.addEventListener('click', function () {
  blankScreen.textContent = '1';
});
buton2.addEventListener('click', function () {
  blankScreen.textContent = '2';
});
buton3.addEventListener('click', function () {
  blankScreen.textContent = '3';
});
buton4.addEventListener('click', function () {
  blankScreen.textContent = '4';
});
buton5.addEventListener('click', function () {
  blankScreen.textContent = '5';
});
buton6.addEventListener('click', function () {
  blankScreen.textContent = '6';
});
buton7.addEventListener('click', function () {
  blankScreen.textContent = '7';
});
buton8.addEventListener('click', function () {
  blankScreen.textContent = '8';
});
buton9.addEventListener('click', function () {
  blankScreen.textContent = '9';
});
buton9.addEventListener('click', function () {
  blankScreen.textContent = '9';
});
buton0.addEventListener('click', function () {
  blankScreen.textContent = '0';
});
butonDot.addEventListener('click', function () {
  blankScreen.textContent = '.';
});
butonEqual.addEventListener('click', function () {
  blankScreen.textContent = '=';
});
butonMultiply.addEventListener('click', function () {
  blankScreen.textContent = '*';
});
butonSubtract.addEventListener('click', function () {
  blankScreen.textContent = '-';
});
butonAdd.addEventListener('click', function () {
  blankScreen.textContent = '+';
});
butonDivide.addEventListener('click', function () {
  blankScreen.textContent = '/';
});
