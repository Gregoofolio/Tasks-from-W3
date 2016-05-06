/*Write a JavaScript conditional statement to find the sign of product of three numbers. 
Display an alert box with the specified sign.
*/

function sign(a, b, c){
	return a * b * c >= 0 ? "+" : "-";
}
console.log(sign(1, -2, -2)); 
