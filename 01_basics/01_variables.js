const accountId = 1234
let accountEmail = "sayani@yopmail.com"
var accountPassword = "345"
accountCity = "jaipur"
let accountSate;
//accountId = 21223 //not allowed

accountEmail = "github@gmail.com"
accountPassword = "34345"
accountCity = "Kolkata"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountSate]);

