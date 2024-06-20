// Write a function isLeapYear that takes a year and returns true if it is a leap year, and false otherwise. A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.

function isLeapYear(year) {
    if (year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0)) {
        return true
    } else {
        return false
    }
}
console.log(isLeapYear(2020)) // Expected output: true
console.log(isLeapYear(2021)) // Expected output: false
