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