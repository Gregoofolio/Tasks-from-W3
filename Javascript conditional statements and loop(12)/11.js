// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function gdc(a, b){
	while (a != b){
		if (a > b){
			a = a - b
		} else {
			b = b - a
		}
	}
	return a
}

console.log(gdc(15, 30));