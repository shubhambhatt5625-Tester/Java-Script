// Higher-Order Functions
// A function that takes a function as argument or returns a function.
//testfn is function name -->logintest and logintestfailed
//testname is Login pass and login Failed Test

function runWithLoggin(testFn, testName) {
    console.log("Starting" + testFn);
    let result = testFn();
    console.log(`Finishing ${testFn}-->${testName}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login pass");
//runWithLoggin(loginTestFAILED, "login Failed Test");