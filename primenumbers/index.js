/** @format */

//Write a function isPrime that takes a number and returns true if it is a prime number, and false otherwise. A prime number is a number greater than 1 that is only divisible by 1 and itself
function isPrime(n) {
	if (n < 2) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(3));
