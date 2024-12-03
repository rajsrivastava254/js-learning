// "use strict"; treat all JS code as newer
//alert(3+3) we are using nodejs not browser so it shows error
//tc39.es and mdn js documentation

let name = "Raj"
let age = 19
let isLogged = true

//number -> 2^53 i.e range
//bigInt for very big number
//String -> ""
//boolean -> true/false
//null ->standalone value and it is object type
//undefined -> no value assign
//symbol -> for uniqueness

//objects

console.log(typeof "hello")
console.log(typeof null)
console.log(typeof undefined)

//two types of datatypes 1.. Premitive and 2..non premitive
//premitive are call by value
//non premitive are call by refernce

const id = Symbol('123') //symbol is datatype use to store unique ID
const anotherId = Symbol('123')
console.log(id===anotherId); //so it result false

//non-premitive dataType array,objects,functions

const arr = ["abc","def","ghi"]
let obj = {
    name:"Raj",
    age:"12",
}

let myFunc = function(){
    console.log("Hello World");
    
}
console.log(typeof arr); //return object
console.log(typeof obj);
console.log(myFunc); //object function



