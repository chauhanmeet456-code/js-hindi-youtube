const accountID = 144553
let accountEmail = "meet@gooogle.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountID = 2 // not allowed

accountEmail = "ac@ac.com"
accountPassword = "12121"
accountCity = "surat"


console.log(accountID)

/*
prefer not to use var
because of issues in block scope and functionsl scope
*/


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])