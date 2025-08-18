const accountId = 144553
let accountEmail = "hola@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState //gives undefined

// accountId = 827328 -> constant values cannot be updated

accountEmail = "annyong@gmail.com"
accountPassword = "839483"
accountCity = "Bengaluru"

/*
    prefer not to use var ->because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])