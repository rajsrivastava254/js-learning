// const tinderUser = new Object() //singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Rambo"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = { //we can use nested objects
    email: "abc@google.com",
    userName: {
        fullusername: {
                firstname:"Rambo"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.userName.fullusername.firstname); //for accessing elements

const obj1 = {a:"abc",b:"12"}
const obj2 = {c:"def",d:"34"}
const obj3 = {e:"ghi",f:"56"}

// console.log({obj1,obj2}); //it is not good practice
const obj4 = Object.assign({}, obj1, obj2, obj3) //this is one method to do 
// console.log(obj4);
const obj5 = {...obj1,...obj2,...obj3}//we use this spread 90% of time
// console.log(obj5);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//it convert all the keys of objects into array and we can apply loop
// //we can also fetch values--> Objects.value(tinderuser)
// console.log(tinderUser.hasOwnProperty("name"));

const course={
    name: "Js in hindi",
    price: "999",
    courseInstructor: "Rambo"
}
const {courseInstructor:instructor} = course //object destructuring, we can change the name of key also
// console.log(courseInstructor);
console.log(instructor);









