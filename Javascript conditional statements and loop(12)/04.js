// 4. Write a JavaScript conditional statement to find the largest of five numbers.
function largerNumber(a, b, c){
 	var arr = [];
 	arr.push(a, b, c);
 	
 	return arr.reduce(function(x, y){
 		return x > y ? x : y;
 	});
 }
console.log(largerNumber(1, 5, 22)); 