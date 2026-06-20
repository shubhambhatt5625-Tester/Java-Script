function runtest(testname, callback) {
    let status = 200;
    callback(testname, status);
}
// in front of function we can type any random variable name to pass the value.
// for eg name , results 
runtest("Api Succesfull", function (testname, status) {
    console.log(testname + "--" + status);
})