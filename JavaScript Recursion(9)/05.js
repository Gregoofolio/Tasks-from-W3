// Write a JavaScript program to compute the exponent of a number

function exponent (num, ind){
	if (ind === 0 ){
		return 1
	} else {
		return num * exponent(num, ind-1)
	}
}
  
console.log(exponent(4, 3)); 