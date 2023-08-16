const accountId = 12345
let accountEmail = "aditya@gmail.com"
var accountPassword = "12345"

let accountState;

/*
Prefer not to use var
because of issue in block csope and fuctional scope
*/

accountCity = "Jabalpur"
// not a good practice

// accountId = 3  not allowed


accountEmail = "aw@aw.com"
accountPassword = "qwerty"
accountCity = "Bhopal"

// console.log(accountId);


console.table([accountId , accountEmail,accountPassword , accountCity ,accountState])