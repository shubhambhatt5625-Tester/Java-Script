// Higher-Order Functions
// A function that takes a function as argument or returns a function.
//testfn is function name -->logintest (Login Test)and logintestfailed
function runWithLoggin(testFn) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

let a = runWithLoggin(loginTest, "hi");
console.log(a);
let b = runWithLoggin(loginTestFAILED);
console.log(b);