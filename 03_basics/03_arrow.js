const User = {
    username: 'John Doe',
    price: 999,

    WelcomeMessage: function() {
        console.log(` ${this.username} ,Welcome to website`);
        console.log(this);
    }

}

// User.WelcomeMessage();
// User.username = "Sam";
// User.WelcomeMessage();

// console.log(this);

function Chai() {
    let user = "Meet";
    console.log(this.user);   
}

// Chai();

// const chai = function() {
//     let user = "Meet";
//     console.log(this.user);
// }

const chai = () => {
    let user = "Meet";
    console.log(this.user);
}


// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Meet", });


// console.log(addTwo(3, 4));


// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach()