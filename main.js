// Grab My Elements
var firstInput = document.querySelector('#num_one');
var secondInput = document.querySelector('#num_two');
var addIt = document.querySelector('#calculateBtn');
var sumElem = document.querySelector('#answer');

// Variable Declarations
var a, b;

// Function to Perform the Answer
var calculateBtn = function () {
  a = firstInput.value;
  b = secondInput.value;
  answerText = (Number(a) + Number(b));
  sumElem.textContent = answerText;
};

// Button Click
addIt.addEventListener('click', calculateBtn);