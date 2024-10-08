const name = "Aadi";
const location = "Bihar";

console.log("My name is " + name);
console.log(`My name is ${name}, I am from ${location}`);

const getName = new String("CodeSpace");

console.log(getName[0]);
console.log(getName.__proto__);

console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(4));
console.log(getName.indexOf('S'));

const newString = getName.substring(0, 4);
console.log(newString);

const anotherString = getName.slice(1, 4);

const string = "  Aadi      ";
console.log(string);
console.log(string.trim());

const url = "https://upgraded-cod-pvg6wvv9w5wc75vv.github.dev/";
console.log(url.replace('-', '_'));
console.log(url.includes('github'));
console.log(url.split('-'));