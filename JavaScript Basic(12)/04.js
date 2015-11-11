// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// Used Heron's Formula 
function triangleArea (a, b, c) {
	var area = Math.sqrt((a + b + c) * (a + b -c ) * (a - b + c) * (-a + b +c)) / 4;
	console.log(area);
}