console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
>, <, >=, <= are comparing the operands, but == is checking the equality
*/

console.log("-------------------");

console.log(undefined == 0); 
console.log(undefined > 0); 
console.log(undefined < 0); 
// undefined will give false with repect to 0, with any comparision operator 

/* 
Strict Check
=== -> this check the value and datatype too
== -> in this, it only check the value, if possible it convert the datatype and compare it

"2" === 2 -> false
"2" == 2 -> true
*/