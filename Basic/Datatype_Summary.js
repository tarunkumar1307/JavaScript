/*
Types of Datatype
Datatype are categories in two type only :
1. Primitive (Call by Value (Copy))
    7 Type : String, Number, Boolean, null, undefined, Symbol, BigInt

2. Non Primitive (Call by Reference)
    Type : Array, Objects, Functions

This is categorization is based on how to store the value and how to access the value
*/

// BigInt
const num = 74185296374185296374852n;

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

// Array
const friends = ["Jai","Naveen"];

// object
let myObj = {
    name: "Aadi",
    age: 19
}

//function as variable
const myFunction = function(){
    console.log("Namastey Duniya");
}

console.table(typeof(num)); // bigint
console.log(typeof(friends)); // object
console.log(typeof(myObj)); // object
console.log(typeof(myFunction)); // function