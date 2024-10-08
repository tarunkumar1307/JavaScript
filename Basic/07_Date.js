let mydate = new Date(); // Date is a object
console.log(mydate); // not understandable
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());

console.log("-------------------------------------------------");

let myCreatedDate = new Date(2023, 0, 23); // month start from 0, here in object parameters 
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());

console.log("-------------------------------------------------");

let timeStamp = Date.now();
console.log(timeStamp);
console.log(`Time in Seconds : ${Math.floor(Date.now()/1000)}`)

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
