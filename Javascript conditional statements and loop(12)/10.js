// 10. Write a JavaScript program to construct the following pattern

/*

*  
* *  
* * *  
* * * *  
* * * * *  

*/

function pattern(n){
	var x = 0;
	var output = "";
	while (x != n){
		x += 1;
        output += '*'
        console.log(output);
	}
};

pattern(6);