// filter function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num>4 );
/*
if we are using paranthesis then we have to use return function
if not then simply write the comparision expression
const newNums = myNums.filter( (num) => num>4 );
const newNums = myNums.filter( (num) => {
    return num>4;
    } );
*/
console.log("Filter: ", newNums);
// filter return the value, but forEach does not return anything, if you try return with forEach loop it will always be undefined

// using forEach Loop
const newnums = [];
myNums.forEach( (num) => {
    if(num > 4){
        newnums.push(num);
    }
});
console.log("forEach Loop:- ", newnums);

// map function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = myNumbers.map((num) => {return num+10});
console.log("Map:- ", newNumbers);

// chaining
const chain = myNumbers
                .map((num) => num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40);

console.log("Chaining:- ", chain);

// reduce function
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const myTotal = nums.reduce(function(accumulator, currentValue){
//     console.log(`Accumulator ${accumulator} and Current Value ${currentValue}`);
    
//     return accumulator + currentValue;
// }, 0); // here 0 is initial value of accumulator

const myTotal = nums.reduce((acc, curr)=> acc+curr, 0);
console.log("Reduce:- ", myTotal);
