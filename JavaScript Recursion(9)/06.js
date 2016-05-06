// 6. Write a JavaScript program to get the first n Fibonacci numbers.
function fibonacci(n){

	if (n === 1){ 
		return [0, 1];
	} else {
		var suma = fibonacci(n - 1);
		s.push(s[s.length-1] + s[s.length-2]);
		return s 
	}
}
console.log(fibonacci(5));