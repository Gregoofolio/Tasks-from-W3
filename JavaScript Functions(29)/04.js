// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sorting(input){
	var array = input.toString().replace(/\W|[0-9]/gi,"").split(""),
        sorted = array.sort().join("");
  	return sorted
}

console.log(sorting("dbca4a'.d4")); // aabcdd