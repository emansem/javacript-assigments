// calculate the factorial of a number;

function factorial(n) {
    let restult = 1
    for (let i = 1; i <= n; i++) {
        restult = restult * i
    }

    return restult
}

console.log(factorial(4))
