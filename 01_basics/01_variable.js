const accountId = 14321
let accountEmail = "abc@gmail.com"
var accountPass = "1234"
accountCity = "jaipur"
let accountState;

// accountId=2 not allowed to change
accountEmail = "xyz@gmail.com"
accountPass="12321"
accountCity="noida"
console.table([accountEmail,accountPass,accountCity,accountState])

/*
prefer to not to use var because of issue in block scope and functional scope
also, use only let
*/
