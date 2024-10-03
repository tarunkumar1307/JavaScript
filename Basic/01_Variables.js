const accountID = 123456;
let accountEmail = "abc@outlook.com";
var accountPass = "xyz";
accountCity = "Jaipur";
let accountState; // if we do not assign any value to the variable, then javascript assign it as undefined

// accountID = 987654; // it will show error, because it is const variable
// console.log(accountID); 

accountEmail = "xyz@google.com";
accountPass = "abc";
accountCity = "Bhiwadi";

console.table([accountID, accountEmail, accountPass, accountCity, accountState]);

/*
Difference between var and let is, var doesn't follow scope
So prefer use let in the programming
*/