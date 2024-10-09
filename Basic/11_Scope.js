// scope

if(true){
    let a = 50;
    const b = 60;
    var c = 70;
}

// console.log(a);
// console.log(b);
// above two will throw error because of error
console.log(c); // this will be printed out of the focus

console.log("---------------------------------------------------------")

// nested scope
function one(){
    const username = "aadi";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one(); // calling the one function

// add(3); // this will give error, as here we are calling the function that is a expression so we have to call it when it initialised
const add = function(num){
    return num+2;
}
console.log(add(4)); // this will work