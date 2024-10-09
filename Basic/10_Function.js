// function

function addTwoNumber(num1, num2){ // in brackets it is parameters
    console.log(num1+num2);
} // this function is not return anything, it just printing the result

function addTwoNumber(num1, num2){ 
    return num1+num2;
}// this function is returning the value by return function

addTwoNumber(2, 5); // in brackets the values are arguments

console.log("-------------------------------------------------------");

function loginUser(name){ // name = "Nargis" (default value)
    if(name === undefined) { // (!name)
        console.log("Please enter a username!!!");
        return;
    }
    return `${name} just logged in`;
}

// console.log(loginUser("Aadi"));
console.log(loginUser());

console.log("-------------------------------------------------------");

function calculateCartPrice(...num1){ // it is spread operator, but here it is called rest operator
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

console.log("-------------------------------------------------------");

const user = {
    name : "aadi",
    price : 99,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user);

console.log("-------------------------------------------------------");

const myArr = [100, 200, 300];
function returnValue(getArray){
    return getArray[1];
}
console.log(returnValue(myArr));