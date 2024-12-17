const arr = [1,2,3,4,5]
// for(const num of arr){ //for each loop
//     console.log(num);
    
// }
// const greeting = "hello world"
// for(const greet of greeting){
//     console.log(`each char is ${greet}`);
    
// }

//----------------MAPS-------------------

const map = new Map()
map.set("IN","India")
map.set("AUS","Australia")
map.set("UK","United Kingdom")
map.set("IN","India") // it only store unique values
// console.log(map);

// for (const [key,value] of map) { //array destructure by using [key,value]
//     // console.log(key,"->",value);   
// }
// const myObj = {
//     game1: "nfs",
//     game2: "spiderman"
// }
// for (const [key, value] of myObj) {
//     // console.log(key,"=>",value); //it wont run objects is not iteratble
    
// }
const myObj = {
    js: "JavaScript",
    cpp: "c++",
    py: "Python"
}
for (const key in myObj) { //we use for in for objects iteration
    //    console.log(`${key} => ${myObj[key]}`);
        
}
const myArr = ["js","py","cpp","java"]

for (const key in myArr) { //we use this way for in loop for array iteration
    // console.log(myArr[key]); //by printing just key it gives the index start from 0
    
}



