/*
22. Write a JavaScript function that accepts two arguments, a string and a letter
 	and the function will count the number of occurrences of the specified letter 
 	within the string. Go to the editor
 */

function countLetter(str, letter){
    var myString = str  
    var myLetter = letter;
    var re = new RegExp(myLetter, 'g');
  
	return myString.match(re).length;
}
console.log(countLetter('w3resource.com', 'o'))