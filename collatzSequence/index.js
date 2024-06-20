function collatzSequence(n) {
    let steps = 0

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2
        } else {
            n = 3 * n + 1
        }
        steps++
    }

    return steps
}

console.log(collatzSequence(6))
console.log(collatzSequence(19))