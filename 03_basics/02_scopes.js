function one(){
    username = "Rambo"
    age = 18
    console.log(age);
    
    function two(){
        email = "abc@gmail.com"
        console.log(username);
        
    }
    //console.log(email); // email is not printing because we print it outer the scope
    two()  //two function call depends upon function call of one if we dont call function one then it print nothing if we call tewo only
}
// one() //it print nothing because in function one we wont print anything

//we can also use functions under if block
//-----------------Interesting------------------

console.log(addOne(5)); //it runs properly, we can use before decleration

function addOne(num){ 
    return num+1
}

// console.log(addTwo(5));//it throw error, we can use before decleration

const addTwo= function(num){//this is called expression
    return num +2
}
console.log(addTwo(5)); 

