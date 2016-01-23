/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
Sample array : [1,2,3,4,5]
Expected Output : 2,4 
*/
function findSeconds(array) {
	var secondLowest, secondGreatest;
	var sortedArray = array.sort();
	if (sortedArray.length===1){ return "Not enough numbers" };
	if (sortedArray.length===2) { secondLowest = sortedArray[1] , secondGreatest = sortedArray[0] 

	} else {
		secondLowest = sortedArray[1];
		secondGreatest = sortedArray[sortedArray.length-2];
	}
	return "Second lowest is : " + secondLowest + " and second greatest is: " + secondGreatest;
}
console.log(findSeconds([2,3,5,2,4]));