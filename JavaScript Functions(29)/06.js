// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(input){ 
	var arrayWords = input.split(" "),
        longest = 0,
        word;

  	for(var i = 0; i < arrayWords.length; i++){
      	if(arrayWords[i].length > longest){
          	longest = arrayWords[i].length;
        	word = arrayWords[i];
        }
    }
 	return word + ": " + longest + " characters";
};
console.log(longestWord("I am webmaster"))// webmaster: 9 characters 