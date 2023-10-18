const orange = document.querySelectorAll(".orange");
const firstNumberText = document.querySelector(".firstNumber");
const secondNumberText = document.querySelector(".secondNumber");
const opperatorText = document.querySelector(".opperator");
const resultText = document.querySelector(".result");

let currentValue = "";
let secondNumber = null;
let firstNumber = null;
let result = null;
let storedNumber = null;
const appendOperator = (opperator) => {
  if (opperator !== "") {
    currentValue = opperator;
    // opperatorText.innerHTML = currentValue;
  }
};
const appendValue = (number) => {
  if (currentValue === "") {
    if (firstNumber === null) {
      firstNumber = number;
    } else {
      firstNumber = parseInt(`${firstNumber}${number}`);
    }
    firstNumberText.innerHTML = firstNumber;
  } else {
    if (secondNumber === null) {
      secondNumber = number;
    } else {
      secondNumber = parseInt(`${secondNumber}${number}`);
    }
    secondNumberText.innerHTML = secondNumber;
  }

  if (currentValue !== "") {
    resultText.innerHTML = "";
  }
};
const calculateSum = (firstNumber, secondNumber, currentValue) => {
  switch (currentValue) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
  }

  if (!isNaN(result)) {
    firstNumber = result;
    secondNumber = null;
    console.log(result);
  }

  return result;
};

function handleResult() {
  console.log(result);
  result = calculateSum(firstNumber, secondNumber, currentValue);
  resultText.innerHTML = result;
  secondNumberText.innerHTML = "";
  firstNumber = result;
  secondNumber = null;
}

let clicked = false;
function toggleOrangeButtons(event) {
  clicked = !clicked;
  if (clicked) {
    event.target.classList.add("btn-clicked");
  } else if (!clicked) {
    orange.forEach((button) => button.classList.remove("btn-clicked"));
  }
}

orange.forEach((button) => {
  button.addEventListener("click", toggleOrangeButtons);
});

function handleClear() {
  resultText.innerHTML = "";
  firstNumberText.innerHTML = "";
  secondNumberText.innerHTML = "";
  currentValue = "";
  firstNumber = null;
  secondNumber = null;
  result = null
}
