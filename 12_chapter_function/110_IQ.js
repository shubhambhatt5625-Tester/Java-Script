// // Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// getStatus(200);
// getStatus(404);
// getStatus(500);

// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }
// let result = logTest("Login");
// console.log(result);// undefined becasue print is already done in 13 no line
// greet("Alice");

// function greet(name) {
//     return `Hello, ${name}!`;
// }

/*sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
};*/

function logTest(name) {
    console.log(`Running: ${name}`);
    //     // no return statement
}
//let result = logTest("Login")
logTest("Login");

function logTest1(name) {
    return (`Running: ${name}`);
    //     // no return statement
}
logTest1("Login");// working but no print as print command is not given.
let result1 = logTest1("Login1");
console.log(result1);