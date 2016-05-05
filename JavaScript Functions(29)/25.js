// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function findLongestCountry(arr){
	
	return arr.reduce(function(last, nextCountry){
    	return last.length > nextCountry.length ? last : nextCountry;
    });
	
}
console.log(findLongestCountry(["Australia", "Germany", "Unated States of America"]));