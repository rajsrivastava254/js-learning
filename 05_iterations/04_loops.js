const coding = ["js", "py","java","cpp"]

// coding.forEach(function (item) {console.log(item);}) //this is call 'callback function'

// coding.forEach(items => { //arrow function
//     console.log(items);
    
// });
// coding.forEach((items,index,coding) => { //it print value, index and also whole array
//     console.log(items,index,coding);
// });

const language = [
    {
        lanName:"JavaSript",
        code:"js"
    },
    {
        lanName:"Java",
        code:"java"
    },
    {
        lanName:"python",
        code:"py"
    }
]
language.forEach(element => {
    // console.log(element); //it print whole objects
    console.log(element.lanName); //we can access the value
    
});
