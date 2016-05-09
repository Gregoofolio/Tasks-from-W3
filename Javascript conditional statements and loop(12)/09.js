/*
9. Write a JavaScript program to find the armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum 
of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/
function armstrongNumber(){
	var numberString;
	var digit;
  
	for (var i = 100 ; i <= 999; i++){
		numberString = i.toString();
        var s = 0;
		for (var j = 0; j <= 2 ;j++ ){
			digit = numberString[j];
			s = s + Math.pow(digit, 3);
		}
        if (s == numberString){
          console.log(s);
        }
	}
}

armstrongNumber();