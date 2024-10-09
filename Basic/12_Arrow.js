const user = {
    username : "Tarun",
    welcomeMessage : function(){
        console.log(`Namestey Duniya, my name is ${this.username}`);
        console.log("Inside the object : ", this);
    }
}

console.log(user);
console.log(user.username);
user.welcomeMessage();

console.log("Outside the object :", this);


function chai(){
    console.log(this);
    /*
    We are getting many information while printing the this, in function.
    But we can't use this.username like this in function, it will show the error
    */
}
chai();

console.log("---------------------------------------------------------------");

// arrow function
const chaiGarram = () => {
    let username = "aadi";
    console.log(username);
    console.log(this); // this will be execited and will give an empty object
}
chaiGarram();

/*
() => {}
this is the arrow function
*/

const addTwo = (num1, num2) => {
    return num1+num2;
}
console.log(addTwo(9, 6));

// implicit return
const addTwoNum = (num1, num2) => num1+num2;
const callObject = (num1, num2) => ({username : "Aadi"}); // we can return object to like this, but we have to put the object in paranthesis
console.log(callObject());