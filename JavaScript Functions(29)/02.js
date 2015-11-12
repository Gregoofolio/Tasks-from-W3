// 2.Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(input){
	var string = input.replace(/\W/gi,"").toLowerCase(),
        reversed = string.split("").reverse().join("");
  	if (string === reversed) { return true }	
  return false
}

console.log(palindrome("kobyla ma maly bok"));