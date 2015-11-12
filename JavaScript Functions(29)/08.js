// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(num) {
  	if (num <= 1){return false}
	for(var i = 2; i < num; i++) {
		if (num % i === 0) {return false}
	}
	return true
}

console.log(isPrime(12));