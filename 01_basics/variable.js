const accountId = 144553
let accountEmail = "hitesh@google.com"
let accountPassword = "12345"
let accountCity = "Jaipur"
let accountState;//undefined


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])