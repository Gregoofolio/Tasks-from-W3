/* 6. Write a JavaScript program which compute, 
the average marks of the following students Then, 
this average is used to determine the corresponding grade.
*/

function getNote(){
    var suma = 0;
	for (var i = 0; i < arguments.length; i++){
		suma = suma + arguments[i];
	}

	var averageNote = suma / arguments.length;

	switch (true) {
        
		case (averageNote >= 90) : return "A";
			break;
		case (averageNote >= 80) : return "B";
			break;
		case (averageNote >= 70) : return "C";
			break;
		case (averageNote >= 60) : return "D";
			break;
		case (averageNote < 60) :return "F";
		break;
	}
}

console.log(getNote(80, 77, 88, 95, 68));