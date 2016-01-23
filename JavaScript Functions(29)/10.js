//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n){
	var row;
	for(var i=1; i<=n; i++){
        row = "";
		for(var j=1; j<=n; j++){
			if(j === i){
				row += " 1 " 
          	} else {
            	row += " 0 ";
            }
		};
		console.log(row + "\n")
	}
};

identityMatrix(3);