// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223 

function reverseNumber(input){
	var output = input.toString().split("").reverse().join("");
	return output
}