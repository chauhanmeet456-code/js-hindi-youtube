// var c = 300;
let a = 100;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER:", a);
}



// console.log(a);
// console.log(b);




function one() {
    const username = "Meet"

    function two () {
        const website = "youtube.com";
        console.log(username);   
    }
    // console.log(website);
 
    two();

}

// one();

if (true) {
    const username = "Meet";
    if (username === "Meet") {
        const website = "youtube";
        // console.log(username + website); 
    }
    // console.log(website);   // This will throw an error because website is not defined in this scope.
}

// console.log(username);    // This will throw an error because username is not defined in this scope.


// ++++++++++++++++++++++++ intteresting ++++++++++++++++++++++++


console.log(addone (5));

function addone (num) {
    return num + 1;
}


addTwo(5);  
const addTwo = function (num) {
    return num + 2;
}

