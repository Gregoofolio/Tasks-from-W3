/* 12. Write a JavaScript function which says whether a number is perfect.
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive 
divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128.
*/
function isPerfect(number){
	var sum = 0;
	if(number<=1){return false}

	for(var i=1;i<=number/2;i++){  
        if(number % i === 0){ sum += i;}  
    }
    if(sum === number){
    	return true
    } else {
    	return false
    }
}
console.log(isPerfect(8128)); // --> true
console.log(isPerfect(6)); // --> true
console.log(isPerfect(0)); // --> false
console.log(isPerfect(7)) // --> false
