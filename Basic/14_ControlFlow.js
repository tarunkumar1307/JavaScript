/*
falsy value
false, 0, -0, BigInt, 0n, "", null, undefined, NaN

=> all other values are treated as true
turthy value (some confusing values)
"0", 'false, " ", [], {}, function(){}
*/

// how to check whether an array is empty
const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}

// how to check whether an object is empty
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); // output -> 5
val1 = null ?? 10; // similarly with undefined too
console.log(val1); // output -> 10

// Ternary Operator
// Syntax => condition ? true : false;