// 16. Write a JavaScript function to extract unique characters from a string

function extractUnique(str){
	var replaced = str.replace(/ *\s /, '').split("");;
    return replaced.filter(function(item, pos) {
    	return replaced.indexOf(item) == pos;
	}).join("");
}
console.log(extractUnique("Hellow  Worlds")) // --> HelowWrds