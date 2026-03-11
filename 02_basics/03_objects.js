// singleton 
// objects.create

// objects literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Meet",
    "full name": "Meet Chauhan",
    [mySym]: "myKey1",
    age: 16,
    location: "Ahmedabad",
    email: "meet@google.com",
    isLoggedIn: false,
    lastLogindays: ["monday", "saturday", "friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "meet@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "meet@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
} 

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());