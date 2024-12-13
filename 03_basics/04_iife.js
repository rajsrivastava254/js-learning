//Immediately Invoked Function Expressions(IIFE)

(function chai(){ //we use to remove the global scope pollution
    console.log(`DB CONNECTED`); 
})() ;  //this is iife we dont need to call function out of the scope we just wrraped enitre function under parenthesis
// chai()
//for executing 2nd function we use semicolon at the end of the first function
(() => {
    console.log(`DB Connected again`);
    
})();
((name) => {
    console.log(`DB Connected again ${name}`);
    
})('Rambo')