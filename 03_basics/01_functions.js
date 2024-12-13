function myName(){
    console.log("R");
    console.log("A");
    console.log("J");
}
// myName() //for printing any function

function sum(num1,num2){ //function with parameter
    console.log(num1+num2);   
}
// sum(3,4)//pass argument to sum the numbers

function sum(num1,num2){ //function with return 
    // let add = num1 +num2
    // return add 
    return num1+num2 
}
let result = sum(4,5) //store value in variable then print
// console.log("Result is:", result);

function id(username){
    if(!username){
        console.log(`Please enter your username`)
        return
    }
    return `${username} just logged in`
}
// console.log(id());//if we dont pass any argument in function it print undefined
// console.log(id("Raj"));

function id(username="sam"){ //if we dont want to go for undefined then pass a default value
    if(!username){
        console.log(`Please enter your username`)
        return
    }
    return `${username} just logged in`
}
// console.log(id("Raj")); //if we pass something then it overite the default value


function calculateCartPrice(...num1){ //this is rest operator,..this is also spread operator but if we use it in function parameter then it called as rest ooperator
    return num1
}
// console.log(calculateCartPrice(200,300,500)); //hence we can pass different argument just by using rest operator and it convert into array so we can easily calculate their sum by apply loops

//--------------------------How can we pass object into function------------------------

const obj = {
    name: "Rambo",
    age:"18"
}
function handleobj(anyobject){ 
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`);   //we we pass wrong key then it will be undefined
}
handleobj(obj) 
