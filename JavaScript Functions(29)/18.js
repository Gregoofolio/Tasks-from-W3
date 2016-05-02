/* 18. Write a function for searching JavaScript arrays with a binary search. 
 Note : A binary search searches by splitting an array into smaller and smaller chunks 
 until it finds the desired value. */

 function binarySearch(array, element){
 	var position = Math.floor(array.length / 2);

 	if ( array[position] === element ){
 		return position;
 	} 
 	else if (array.length === 1){
 		return null;
 	}
 	else if ( array[position] < element ){
		var arr = array.slice(position + 1);  
		var rest = binarySearch(arr, element);  

		if ( rest === null ){  
			return null;
		} else {  
			return position + 1 + rest;  
		}  
 	}
 	else {  
      var array_left = array.slice(0, position);  
      return binarySearch(array_left, element);  
   }  
 }

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4))
