var itemPrice=2.55;
var amountInWallet=20;
var numOfFriends=5;
var ageYears=25;
var firstName="Juan";
var lastName="Chavez";
var midName="Jose";

/*Assignment was to create one variable for each of the above variables and give each a value*/
//Substraction
var newmoney=amountInWallet-itemPrice;
//Divsion
var newFriends=numOfFriends/ageYears;
//Concatenation
var fullName=firstName+" "+midName+" "+lastName;

//printing out the first variables created 
console.log("An item's price: "+ itemPrice);
console.log("Amount of money in wallet: "+ amountInWallet);
console.log("Number of friends at current moment: "+ numOfFriends);
console.log("Age in years (as a whole number): "+ ageYears);
console.log("First name: "+ firstName);
console.log("Last name: "+ lastName);
console.log("Middle initial: "+ midName);
//printing out value for last three variables created using substraction, divsion and concatenation

console.log("Money in wallet after purchase: "+ newmoney);

console.log("Friend made per year of life: "+ newFriends);
console.log("Full Name: "+ fullName);