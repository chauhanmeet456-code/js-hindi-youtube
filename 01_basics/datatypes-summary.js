// Primitive

// 7 type:- String,Number,Boolean,null,Undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 256799123567n



// Refrence (Non-primitive)

// Array,Objects,Functons

const heros = ["shaktiman","chotanhim","balweer"];
let myObj = {
    name:"Meet",
    age:16,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof anotherId);

// https://262.ecma-interntional.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename;
anothername = "ChaiaurCode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo = userOne

userTwo.email = "meet@google.com"

console.log(userOne.email);
console.log(userTwo.email);