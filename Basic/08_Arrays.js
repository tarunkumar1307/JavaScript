const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr[2]);

const arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
arr1.push(7);
arr1.pop();
console.log(arr1);

arr1.unshift(9);
console.log(arr1);
arr1.shift();
console.log(arr1);

/*
arr.inlcudes(element); // true and false
arr.indexOf(element); // return the index
arr.join(); // it returns the output in string type
*/

// Slice, Splice
console.log("A ", arr1);
console.log("Slice : "+ arr1.slice(1, 3));
console.log("After Slice : " + arr1);
console.log("Splice : "+ arr1.splice(1, 3));
console.log("After Splice : " + arr1);

console.log("-----------------------------------------------------");

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros); // array will be pushed as single element
console.log(marvel_heros);
marvel_heros.pop();

const allHero = marvel_heros.concat(dc_heros);
console.log(allHero);

const allNewHeros = [...marvel_heros, ...dc_heros]; // spread operator
console.log(allNewHeros);

console.log("-----------------------------------------------------");
// flat function
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity); // in bracket we have to give the number i.e. at what depth we have to open the array
console.log(anotherArray);
console.log(realAnotherArray);

console.log("-----------------------------------------------------");
console.log(Array.isArray("Aadi"));
console.log(Array.from("Aadi")); // convert it into Array
console.log(Array.from({name : "Aadi"})); // provide an empty array, as we have specify that we are making an array of keys or of values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));