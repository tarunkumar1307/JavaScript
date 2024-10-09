// Immediately Invoked Function Expressions (IIFE)
/*
Sometime we have problem with the polution of global scope variable or anything,
so to remove those problem we are using this.

In this the function is directly executed.
*/

// normal function
(function chai(){
    // named IIFE
    console.log("DB Connected");
})(); // always put semi-colon, which tells it is ends, otherwise it may show some error

// arrow function
( () => {
    // unnamed IIFE
    console.log("DB Connected Two");
})();

( (name) => {
    console.log(`My name is ${name}`);
})("Tarun");