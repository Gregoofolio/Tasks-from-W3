/* 7. Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz".
*/

function fizzBuzz(n){
	var output;
	for (var i = 1 ; i <= n ; i++){
        output = "";
		if (i % 3 === 0){
			output += "Fizz"
		}
		if (i % 5 === 0){
			output += "Buzz" }
		console.log(output || i)
	}  
}
fizzBuzz(100);