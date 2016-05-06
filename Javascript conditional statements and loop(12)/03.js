/*3. Write a JavaScript conditional statement to sort three numbers.
 Display an alert box to show the result.
 */

 function sorting(a, b, c){
 	var arr=[];
 	arr.push(a, b, c);
 	
 	return arr.sort(function(x, y){
 		return x > y ? 1 : 0;
 	});
 }
console.log(sorting(1, -5, -4)); 