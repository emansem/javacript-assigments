/** @format */

// Take input for three sides of the triangle
let side1 = prompt('Enter the length of side 1')
let side2 = prompt('Enter the length of side 2')
let side3 = prompt('Enter the length of side 3')

// Convert string inputs to numbers
side1 = Number(side1)
side2 = Number(parseFloat(side2))
side3 = Number(side3)

if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    alert('Please enter valid numbers for the sides.')
} else {
    if (side1 === side2 && side1 === side3) {
        alert('The triangle is Equilateral')
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert('The triangle is Isosceles')
    } else {
        alert('The triangle is Scalene')
    }
}
