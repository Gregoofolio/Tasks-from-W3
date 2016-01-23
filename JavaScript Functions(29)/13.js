// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(number){
	var arrayOfFactors = [];

	for(var i=0; i <= Math.floor(Math.sqrt(number)); i++){
		if( number % i === 0) {arrayOfFactors.push(i);
        	if (number / i !== i) { arrayOfFactors.push(number / i)};                       
        }
	}
	return arrayOfFactors.sort();
}
console.log(factors(6)) // --> [1, 2, 3, 6]
console.log(factors(17)) // --> [1, 17]