// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined

// {} - Block
// if(){}
// funcion name(){}


// let = loyal
// var = varirable / triator
let shubham = "pending";
shubham = "done"; //for let it will assign new value.
{
    let shubham = "bhatt"
}
//function can be call again and again but block can be call agaign and again