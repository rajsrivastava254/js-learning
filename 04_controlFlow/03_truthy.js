const userEmail = "raj@google.com"
if (userEmail) {
    // console.log("Got email");  
} else{
    console.log("cant found email");
    
}
//falsy value
//false, 0, -0, bigInt 0n, "", null, undefined, NaN.

//truthy value
//"0", 'false', " ", [], {}, function{}(empty parameter)

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    // console.log("object is empty");
    
}

//nullish coalesing operator(??): null, undefined

let val1;
// val1 = 5??10 //it assign first value
val1 = null??10 //it avoid null and undefined value and assign true value
console.log(val1);

//ternary operator
//condition ?true:false
const iceteaPrice = 100
iceteaPrice>=80 ? console.log("ok"):console.log("not ok");


