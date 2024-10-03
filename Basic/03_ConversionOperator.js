let score = "33";
console.log(typeof score);

console.log("----------------");

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log("----------------");

score = "33abc";
valueInNumber = Number(score);
console.log(typeof valueInNumber); // here it will convert the string into number but we have to check in javascript that whether it is valid number or not
console.log(valueInNumber); // it will print that valueInNumber is Not a Number

/*
(printing the variable)
null into number -> 0
"33" -> 33
"33abc" -> NaN
true -> 1, false -> 0

to Boolean
1 -> true // any number except 0 will give output true
0-> false
"" -> false
"abc" -> true
*/
console.log("----------------");

let flag = 1500;
console.log(Boolean(flag));

console.log();
console.log("************* Operation **************");

// ************* Operation **************
let value = 3;
let negValue = -value;
console.log(negValue);

console.log("----------------");

console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32