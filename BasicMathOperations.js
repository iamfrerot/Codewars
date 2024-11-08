// Function that do basic Mathematical Operations i.e: *, +, -, /

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

console.log(basicOp("*", 2, 3)); // Output: 6


// Refactor using eval method

const basicOp2 = (operation, value1, value2) => eval(`${value1} ${operation} ${value2}`);

console.log(basicOp2("+", 2, 3)); // Output: 5
