/* 
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
function generateString(str, howLong){
	var sample = str,
		temp,
		generatedString = "";

	for (var i = 0; i < howLong ; i++){
		temp = sample[Math.floor(Math.random(sample.length) * sample.length)];
		generatedString =+ temp;
	}
	return generatedString;
}
