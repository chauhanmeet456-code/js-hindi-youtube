// for 

for (let i = 1; i < 11; i++) {   // index <= 10;
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    }
  
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10;i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner value: ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);         // table 1 to 10
    }
    
}
let myArray = ["batman","spiderman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and countinue
// break
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`value of i is: ${i}`);
    
}

// countinue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    // console.log(`value of i is: ${i}`);
}