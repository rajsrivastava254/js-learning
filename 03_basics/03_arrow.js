const user = {
    username: "Rambo",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`);
        
    }
}
// user.welcomeMessage()
// user.username = "Sam" //we can change the context of username
// user.welcomeMessage()
// console.log(this); //it prints empty node context

const arrowFunction = () => { //syntax of arrow function () => {}
    let username = "Ramboo"
    console.log(username); //if we use this in console log it prints undefined
    
}
// arrowFunction() 

// const addTwo = (num1,num2) => { simple arrow function
//     return num1 +num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1 +num2) //we can also use arrow function in this syntax(implicit return)
// const addTwo = (num1,num2) => ({name:"Rambo"}) //we can also return objects under parenthesis
console.log(addTwo(3,4));




