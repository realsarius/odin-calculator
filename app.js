operate = (operator, num1, num2) => {
  if (operator === "+") {
    const result = add(num1, num2);
    return result;
  } else if (operator === "-") {
    const result = subtract(num1, num2);
    return result;
  } else if (operator === "*") {
    const result = multiply(num1, num2);
    return result;
  } else if (operator === "/") {
    const result = divide(num1, num2);
    return result;
  } else {
    console.log("Check for operator");
  }
};

add = (num1, num2) => {
  return num1 + num2;
};

subtract = (num1, num2) => {
  return num1 - num2;
};

multiply = (num1, num2) => {
  return num1 * num2;
};

divide = (num1, num2) => {
  if (!num2 == 0) {
    return num1 / num2;
  }
};

console.log(operate("*", 8, 12));
