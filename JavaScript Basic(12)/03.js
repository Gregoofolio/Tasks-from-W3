// 3. Write a JavaScript program to get the current date

function todaysDate() {
	var d = new Date(),
        day = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear();
	if(day < 10 ){
    	day = "0" + day;
    };
  	if(month < 10 ){
    	month = "0" + month;
    };
    
	console.log(day + "-" + month + "-" + year)
};