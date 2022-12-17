// operate = (operator, num1, num2) => {
//   if (operator === "+") {
//     const result = add(num1, num2);
//     return result;
//   } else if (operator === "-") {
//     const result = subtract(num1, num2);
//     return result;
//   } else if (operator === "*") {
//     const result = multiply(num1, num2);
//     return result;
//   } else if (operator === "/") {
//     const result = divide(num1, num2);
//     return result;
//   } else {
//     console.log("Check for operator");
//   }
// };

// add = (num1, num2) => {
//   return num1 + num2;
// };

// subtract = (num1, num2) => {
//   return num1 - num2;
// };

// multiply = (num1, num2) => {
//   return num1 * num2;
// };

// divide = (num1, num2) => {
//   if (!num2 == 0) {
//     return num1 / num2;
//   }
// };

// console.log(operate("*", 8, 12));

const resultText = document.querySelector(".resultOutput");

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
let number = "";
oneBtn.addEventListener("click", (e) => {
  number += "1";
  resultText.textContent = number;
});

twoBtn.addEventListener("click", (e) => {
  number += "2";
  resultText.textContent = number;
});

threeBtn.addEventListener("click", (e) => {
  number += "3";
  resultText.textContent = number;
});

fourBtn.addEventListener("click", (e) => {
  number += "4";
  resultText.textContent = number;
});

fiveBtn.addEventListener("click", (e) => {
  number += "5";
  resultText.textContent = number;
});

sixBtn.addEventListener("click", (e) => {
  number += "6";
  resultText.textContent = number;
});

sevenBtn.addEventListener("click", (e) => {
  number += "7";
  resultText.textContent = number;
});

eightBtn.addEventListener("click", (e) => {
  number += "8";
  resultText.textContent = number;
});

nineBtn.addEventListener("click", (e) => {
  number += "9";
  resultText.textContent = number;
});

zeroBtn.addEventListener("click", (e) => {
  number += "0";
  resultText.textContent = number;
});

clearBtn.addEventListener("click", () => {
  number = "";
  resultText.textContent = number;
});

addBtn.addEventListener("click", () => {
  number += "+";
  resultText.textContent = number;
});

subtractBtn.addEventListener("click", () => {
  number += "-";
  resultText.textContent = number;
});

multiplyBtn.addEventListener("click", () => {
  number += "*";
  resultText.textContent = number;
});

divideBtn.addEventListener("click", () => {
  number += "/";
  resultText.textContent = number;
});

equalsBtn.addEventListener("click", () => {
  const result = eval(number.replace(/[^0-9\+\-\*\/]/g, ''));
  resultText.textContent = result;
  number = result;
});