function largerNumbers(array, number){
	return array.filter(function(element, index, array){
		return element > number
	});
}
console.log(largerNumbers([11, 45, 4, 31, 64, 10], 10));