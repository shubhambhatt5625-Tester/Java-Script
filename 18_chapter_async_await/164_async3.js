async function getTestResult() {
    return "Pass";
}

getTestResult.then(function (res) {
    console.log(res);
});

//162 and 163 are same but code difference
// in 162 the promise is mention inside the function
//here it is mention in the before the function by applying async.
