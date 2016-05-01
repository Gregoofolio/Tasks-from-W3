/*
5. Write a JavaScript function that accepts a string as a parameter 
and converts the first letter of each word of the string in upper case.
*/
function upperCase(str) {
	var newArray=[],
    	newWord,
		words = str.split(" ");
    
	for (var i = 0; i < words.length; i++){
         newWord = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase());
         newArray.push(newWord);
	}
	return newArray.join(' ');
};

upperCase("How are you?")


