let num1 = Number(prompt('Enter a number'))
let num2 = Number(prompt('Enter a number'))
let operation = prompt('Enter your sign to carryout the operation  example +')




// Calculate the result based on the operation
let result;
switch (operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    result = 'Invalid operation';
}

// Display the result using alert
alert(`The result of ${num1} ${operation} ${num2} is  ${result}`);