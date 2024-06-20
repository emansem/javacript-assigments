// write a function to print mumbers.

function printEvenNumbers(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

printEvenNumbers(40)
