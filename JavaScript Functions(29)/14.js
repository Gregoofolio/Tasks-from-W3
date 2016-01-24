//14. Write a JavaScript function to convert an amount to coins.

function amountToCoins(amount, coins){
	if (amount === 0) { return []; }
	else {
    	if (amount >= coins[0])   
			{  
				left = (amount - coins[0]);  
				return [coins[0]].concat( amountToCoins(left, coins) );  
			}   
		else {  
			coins.shift();
			return amountToCoins(amount, coins);  
		}  
	}
}

console.log(amountToCoins(45, [25,10,5,2,1])) // --> [25, 10, 10]