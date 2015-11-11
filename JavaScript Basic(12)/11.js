/*
	11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. Go to the editor
	[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
	Expected Output :
	60°C is 140 °F
	45°F is 7.222222222222222°C  
*/

function convertTemp(c, f) {
	var c = c || 0,
        f = f || 0;
  	var toFahrenheit = (9 * c + 160) / 5
    var toCelsius = (5 * f - 160) / 9;
	console.log(c +"°C is "+ toFahrenheit +"°F" + "\n" + f +"°F is "+ toCelsius +"°C")
}
convertTemp(60, 45);