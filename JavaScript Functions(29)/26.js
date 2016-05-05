// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestSubstring(str){
	var arr = str.split(' ');

	return arr.reduce(function(last, nextSubstring){
		return last.length > nextSubstring.length ? last : nextSubstring
	})
}
console.log(longestSubstring("This is awesome text"));