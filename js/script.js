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
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === 'x') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
};

const blankScreenUp = document.querySelector('.screen2');
const blankScreen = document.querySelector('.screen1');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const dotButton = document.querySelector('.dot');

let primaryValue = '';
let secondaryValue = '';
let operator = '';
blankScreen.textContent = 0;

numberButton.forEach(number => {
  number.addEventListener('click', function () {
    primaryValue += number.value;
    blankScreen.textContent = primaryValue;
  });
});

operatorButton.forEach(el => {
  el.addEventListener('click', function () {
    if (primaryValue && secondaryValue) {
      calculate();
    }
    secondaryValue = primaryValue;
    operator = el.textContent;
    blankScreenUp.textContent = `${primaryValue} ${operator}`;
    primaryValue = '';
  });
});

deleteButton.addEventListener('click', function () {
  if (primaryValue) {
    primaryValue = primaryValue.toString();
    primaryValue = primaryValue.slice(0, -1);
    blankScreen.textContent = primaryValue;
  }
});

clearButton.addEventListener('click', function () {
  primaryValue = '';
  secondaryValue = '';
  blankScreen.textContent = '0';
  blankScreenUp.textContent = '';
});

dotButton.addEventListener('click', function () {
  if (!primaryValue.includes('.') && !blankScreen.textContent.includes('.')) {
    primaryValue += dotButton.value;
    blankScreen.textContent = primaryValue;
  }
});

const calculate = function () {
  const result = operate(
    operator,
    Number(secondaryValue),
    Number(primaryValue)
  );
  blankScreen.textContent = result;
  blankScreenUp.textContent = `${secondaryValue} ${operator} ${primaryValue} = `;
  primaryValue = result;
};

equalButton.addEventListener('click', calculate);
