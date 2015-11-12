// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vovels(string){
	var arrayOfLetters = string.toLowerCase().split(""),
        count = 0;
     
    arrayOfLetters.forEach(function(letter){
    	letter === "a" || letter ==="u" || letter ==="i" || letter ==="o" || letter ==="e" ? count++ : count;
    });
  return count
}

console.log(vovels("anakonda"));