// Write a function calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest, and time. The formula for simple interest is: SI = (P * R * T) / 100.

function calculateSimpleInterest(p, r, t) {
    let result = (p * r * t) / 100

    return result
}

console.log(calculateSimpleInterest(2000, 5, 2))
