// Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function invitationWorld(funcAsParameter)  {  
	funcAsParameter();    
}  
  
function welcomeNewWorld() {  
	console.log('Hello World');  
}  
  

invitationWorld(welcomeNewWorld);
