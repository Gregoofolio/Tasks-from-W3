var b = Number(prompt("Input base", "0"));  
var n = Number(prompt("Input exponent.", "0"));

function computeBN(){
	var result = 1;
	for (var i = 1; i<= n ; i++){
		result *= b;
	}
	return result
}