/** @format */

//Write a function reverseDigits that takes a number and returns the number with its digits reversed.

function reverseDigits(num) {
  let reversed = num.toString().split("").reverse().join("");

  return parseInt(reversed);
}

console.log(reverseDigits(123456));
