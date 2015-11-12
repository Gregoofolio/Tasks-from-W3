// 1. Write a JavaScript function that reverse a number.
function reverseNumber(input){
	var output = input.toString().split("").reverse().join("");
	return output
}