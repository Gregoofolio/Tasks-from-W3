// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function titleCase(str){
	var lowCharString = str.toLowerCase(),
  		littleArray = lowCharString.split(" "),
  		newArray = [],
        firstLetter, firstLetterUpper, newWord;
    for (var i = 0; i < littleArray.length; i++){
    	firstLetter = littleArray[i].charAt(0),
        firstLetterUpper = firstLetter.toUpperCase();
      	newWord = littleArray[i].replace(firstLetter, firstLetterUpper);
      	newArray.push(newWord)
    }
 	return newArray.join(" ");
}

console.log(titleCase("I am a little string")); // I Am A Little String