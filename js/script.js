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

let primaryValue = '';
let secondaryValue = '';
// let result = '';
let operator = '';
const del = /[\W_]/g;
blankScreen.textContent = 0;

numberButton.forEach(number => {
  number.addEventListener('click', function () {
    primaryValue += number.value;
    console.log(number.value);
    blankScreen.textContent = primaryValue;
    // blankScreen.textContent = `${blankScreen.textContent}${number.value}`;
  });
});

operatorButton.forEach(el => {
  el.addEventListener('click', function () {
    if (primaryValue && secondaryValue) {
      calculate2();
    }
    secondaryValue = primaryValue;
    // if (el.value === '/') {
    //   operator = 'divide';
    // } else if (el.value === 'x') operator = 'multiply';
    // else if (el.value === '-') operator = 'subtrack';
    // else if (el.value === '+') operator = 'add';
    operator = el.textContent;
    blankScreenUp.textContent = `${primaryValue} ${operator}`;
    // operate(operator, parseFloat(primaryValue), parseFloat(secondaryValue));
    // console.log(primaryValue, secondaryValue);
    // console.log(
    //   operate(operator, parseFloat(primaryValue), parseFloat(secondaryValue))
    // );
    // calculate();

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

const calculate2 = function () {
  const result = operate(
    operator,
    parseInt(secondaryValue),
    parseInt(primaryValue)
  );
  blankScreen.textContent = result;
  blankScreenUp.textContent =
    secondaryValue + '' + operator + '' + primaryValue;
  primaryValue = result;
  // blankScreen.textContent = `${blankScreen.textContent + result}`;
};
equalButton.addEventListener('click', calculate2);

///
///
// const calculate = function () {
//   const result = operate(
//     operator,
//     parseFloat(primaryValue),
//     parseFloat(secondaryValue)
//   );
///
// buton1.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}1`;
// });
// buton2.addEventListener('click', function () {
//   for (let i = 0; i < 1; i++) {
//     blankScreen.textContent += '2';
//   }
// });
// buton3.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}3`;
// });
// buton4.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}4`;
// });
// buton5.addEventListener('click', function () {
//   if (
//     Number(blankScreen.textContent.replace(del, '')) ===
//     Number(blankScreenUp.textContent.replace(del, ''))
//   ) {
//     blankScreen.textContent = '';
//   }
//   blankScreen.textContent = `${blankScreen.textContent}5`;
// });
// buton6.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}6`;
// });
// buton7.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}7`;
// });
// buton8.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}8`;
// });
// buton9.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}9`;
// });
// buton0.addEventListener('click', function () {
//   blankScreen.textContent = `${blankScreen.textContent}0`;
// });
// butonDot.addEventListener('click', function () {
//   blankScreen.textContent = '.';
// });
// ////
// butonAdd.addEventListener('click', function () {
//   operator = 'add';
//   if (blankScreenUp.textContent.includes('+')) {
//     secondaryValue = Number(blankScreen.textContent.replace(del, ''));
//     for (let i = 0; i < 1; i++) {
//       blankScreenUp.textContent = `${add(primaryValue, secondaryValue)} + `;
//       blankScreen.textContent = `${add(primaryValue, secondaryValue)}`;
//     }
//     result += Number(blankScreenUp.textContent.replace(del, ''));
//     // if (
//     //   Number(blankScreen.textContent.replace(del, '')) ===
//     //   Number(blankScreenUp.textContent.replace(del, ''))
//     // ) {
//     //   blankScreen.textContent = 0;
//     // }
//   } else {
//     primaryValue = Number(blankScreen.textContent.replace(del, ''));
//     blankScreenUp.textContent = `${primaryValue} + `;
//     blankScreen.textContent = `${secondaryValue}`;
//     secondaryValue = Number(blankScreen.textContent.replace(del, ''));
//   } // blankScreen.textContent = `${operate(
//   //   operator,
//   //   primaryValue,
//   //   secondaryValue
//   // )}`;
// });
// ////
// butonMultiply.addEventListener('click', function () {
//   primaryValue = Number(blankScreen.textContent.replace(del, ''));
//   operator = 'multiply';
//   blankScreenUp.textContent = `${primaryValue} * `;
//   blankScreen.textContent = `${secondaryValue}`;
// });
// ////
// butonSubtract.addEventListener('click', function () {
//   primaryValue = Number(blankScreen.textContent.replace(del, ''));
//   operator = 'subtract';
//   blankScreenUp.textContent = `${primaryValue} - `;
//   blankScreen.textContent = `${secondaryValue}`;
// });
// ////
// butonDivide.addEventListener('click', function () {
//   primaryValue = Number(blankScreen.textContent.replace(del, ''));
//   operator = 'divide';
//   blankScreenUp.textContent = `${primaryValue} / `;
//   blankScreen.textContent = `${secondaryValue}`;
// });
// ////
// butonEqual.addEventListener('click', function () {
//   blankScreenUp.textContent = `${
//     blankScreenUp.textContent + blankScreen.textContent
//   } =`;
//   secondaryValue = Number(blankScreen.textContent.replace(del, ''));
//   console.log(operate(operator, primaryValue, secondaryValue));
//   blankScreen.textContent = `${operate(
//     operator,
//     primaryValue,
//     secondaryValue
//   )}`;
// });

// const screenPopulate = function () {};
