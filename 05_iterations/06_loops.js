///Reduce method

const nums = [1,2,3]

// const myTotal = nums.reduce(function (acc,currval){
//     console.log(`acc is ${acc} and currval is ${currval}`);
//     return acc + currval
// },0) //here 0 is accumulator initial value
// console.log(myTotal);

//-----------by using arrow function-----------

const Total = nums.reduce( (acc,currval)=> acc+currval,0)
console.log(Total);

//----------------------------------------------
