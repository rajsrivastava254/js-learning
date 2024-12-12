const marvel_heros = ["thor","Ironman","deadpool"]
const dc_heros = ["superman","batman","spiderman"]

//marvel_heros.push(dc_heros)//it do not put elements of dc_heros but it push whole array
// console.log(marvel_heros); 

const all_Heros = marvel_heros.concat(dc_heros) //we use concate and create new array to store all elements
// console.log(all_Heros);

const all_Hero = [...marvel_heros, ...dc_heros] //this also work same
// console.log(all_Hero);

const another_array = [1,2,3,[4,5],8,[7,[8,9]]] //if there are multiple array inside single array

const real_array = another_array.flat(Infinity) //it convert into single array
// console.log(real_array);

console.log(Array.from("Raj")); //it convert string into array

let s1 = 10
let s2 = 1
let s3 = 5
console.log(Array.of(s1,s2,s3)); //it converts all value into an array




