/*
	1. Write a JavaScript program to display the current day and time in the following format:
	Sample Output : Today is : Friday.
	Current time is : 4 PM : 50 : 22
*/
function dateAndTime(){
	var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thorsday", "Friday", "Saturday"]
	var d = new Date(),
		day = d.getDay(),
        hours = d.getHours(),
  		min = d.getMinutes(),
        sec = d.getSeconds();
  	var ampm = hours >= 12 ? "PM" : "AM";
  	
	console.log("Today is: " + week[day] + "\n" + "Current time is: " + hours + " "+ ampm + " : " + min + " : " + sec )
};

