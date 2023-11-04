const answerTxt = document.getElementById('answerText');

const addBtn = document.getElementById('addBtn');
const minusBtn = document.getElementById('minusBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const equalBtn = document.getElementById('equalBtn');
const clearBtn = document.getElementById('clearBtn');

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

let firstNumber = 0;
let operator = null;

function handleNumberClick(number) {

  answerTxt.value += number;

}

function handleOperatorClick(op) {

  firstNumber = parseFloat(answerTxt.value) || 0;
  operator = op;
  answerTxt.value = '';

}

function calculate() {

  const secondNumber = parseFloat(answerTxt.value) || 0;
  let result = 0;

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    
    case '-':
      result = firstNumber - secondNumber;
      break;

    case 'x':
      result = firstNumber * secondNumber;
      break;
    
    case '/':
      if (secondNumber !== 0) {

        result = firstNumber / secondNumber;

      }

      else {

        result = 'Error'

      }

      break;

  }

  answerTxt.value = result;

}

zero.addEventListener('click', function() {

  handleNumberClick('0');

});

one.addEventListener('click', function() {

  handleNumberClick('1');

});

two.addEventListener('click', function() {

  handleNumberClick('2');

});

three.addEventListener('click', function() {

  handleNumberClick('3');

});

four.addEventListener('click', function() {

  handleNumberClick('4');

});

five.addEventListener('click', function() {

  handleNumberClick('5');

});

six.addEventListener('click', function() {

  handleNumberClick('6');

});

seven.addEventListener('click', function() {

  handleNumberClick('7');

});

eight.addEventListener('click', function() {

  handleNumberClick('8');

});

nine.addEventListener('click', function() {

  handleNumberClick('9');

});

addBtn.addEventListener('click', function() {

  handleOperatorClick('+');

});

minusBtn.addEventListener('click', function() {

  handleOperatorClick('-');

});

multiplyBtn.addEventListener('click', function() {

  handleOperatorClick('x');

});

divideBtn.addEventListener('click', function() {

  handleOperatorClick('/');

});

function clearInput() {

  answerTxt.value = '';

};

clearBtn.addEventListener('click', clearInput);

equalBtn.addEventListener('click', calculate);








