
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2;
    // return result;
    return number1 + number2; 
}

const result = addTwoNumbers(3, 5);

// console.log("result:", result); // This will log 'undefined' because the function does not return a value.


function loginUserMessage(username = "Guest") { // This sets a default value of "Guest" for the username parameter if it is not provided when the function is called.   
    if (username === undefined) {                      // This checks if the username parameter is not provided (undefined). and !username also works because it checks for falsy values, which includes undefined.
        console.log("Please enter your username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Meet"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) {
    return num1; 
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    name: "Hitesh",
    price: 199,
}

function handleObject(anyobject) {
    // console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    name: "sam",
    price: 399
})

const myNewArry = [100, 400, 200, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArry));
// console.log(returnSecondValue([200, 400, 500, 600]));
