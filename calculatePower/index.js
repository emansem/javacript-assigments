////Write a function calculatePower that takes a base number x and an exponent n, and returns x raised to the power of n (i.e., xnx^nxn). Use a loop to calculate the result.
function calculatePower(x, n) {
    let result = 1
    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result
}

console.log(calculatePower(5, 2))
