

//write a function that prints oddnumbers from 1 - 300 and from 300 to 1

function printOldNumbers(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
}

//printOldNumbers(300);

// print numbers from 300 to 1

function printOldNumber(num) {
	for (let i = num; i >= 1; i--) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
}

printOldNumber(300);
