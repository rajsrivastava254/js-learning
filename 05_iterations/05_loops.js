// const coding = ["js", "py","java","cpp"]

// const value = coding.forEach(function (item) {
//     console.log(item)
//     // return value //it wont work
// }
// )
// console.log(value);

const nums = [1,2,3,4,5,6,7,8,9,10]

// const myNum = nums.filter( (num)=> num>4 ) //here num is another variable like i
// console.log(myNum); //if we use (num)=> { return num>4} then we have to return condition

//-----------alternative way----------------------
// const myNum = []
// nums.forEach(num => {
//     if(num>4){
//         myNum.push(num)
//     }
// })
// console.log(myNum);
//----------------------------------------------------

//filter use in various cases for fetching data

//----------------------------------------------------
const myNUMS = nums.map((num)=> num+10) //we can use map also
// console.log(myNUMS);

const myNums = nums  //method chaining
.map((num)=> num*10)
.map((num) => num +1)
.filter( (num)=>num>=40)

console.log(myNums);










