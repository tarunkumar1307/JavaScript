// for of loop
console.log("For of Loop");
const arr = [1, 2, 3, 4, 5];
for(const num of arr){
    console.log(num);
}
const str = "Hello World!";
for (const character of str) {
    console.log(character);
}

// Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('FR', "France");
console.log("Map;-", map);
for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

// NOTE:- object is not iteratable(for of loop can't iterate over object)

// object
const myObject = {
    'js' : "Javascript",
    'cpp' : "C++",
    'rb' : "ruby",
    'swift' : "swift by apple",
};
console.log("Object----------------------------------------------");
// for in loop
for (const key in myObject) {// its not necessary that for in loop is only use for the iteration of object
    console.log(`${key} shortcut is ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);   
}
// for in loop gives the key to the variable in the loop, so we have to use the key to print the element of the object, array, etc.

// for each loop
console.log("For Each Loop-------------------------------------");
const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach(function (key){
    console.log(key);
})
console.log("-----------------")
coding.forEach(element => {
    console.log(element);
});
console.log("-----------------")
function printIt(item){
    console.log(item);
}
coding.forEach(printIt);

// in forEach loop we get the item, index, and the whole array
console.log("-----------------")
coding.forEach((key, index, arr)=>{
    console.log(key, index, arr);
});

// objects in array
const myCoding = [
    {
        languageName : "Javascript",
        langaugeFile : "js",
    },
    {
        languageName : "java",
        langaugeFile : "java",
    },
    {
        languageName : "python",
        langaugeFile : "py",
    },
];

myCoding.forEach(() => {

});