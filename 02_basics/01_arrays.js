let myArr = [0,1,2,3,4,5]
const myArr1 = new Array(1,2,3,4,5)
// console.log(myArr);
// console.log(myArr1);

// same as in python

myArr.push(66)
myArr.pop()
// console.log(myArr);

const newArr = myArr1.join() //it converted into string
console.log(newArr);
console.log(typeof newArr);

//slice and splice

console.log("A",myArr1);

const m1 = myArr1.slice(1,3) //it wont manipulate the original array
console.log("B",myArr1);
console.log(m1);

const m2 = myArr1.splice(1,3) //it basically manipulate the original array
console.log("C",myArr1); //it gives the inbetween elements of manipulated array
console.log(m2);





