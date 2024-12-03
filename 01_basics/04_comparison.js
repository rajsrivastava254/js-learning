console.log("2">1);
console.log("02">1); //since it convert string value to integer and perform conversion

console.log(null>0); //comparison converts null to a number, treating it as zero
console.log(null==0); //so null>=0 will true and null>0 or null==0 will false
console.log(null>=0); //it wont convert to exact zero so, avoid such types of comparison

console.log("2"==2);
console.log("2"===2); //=== means it strictly check value and also there datatypes





