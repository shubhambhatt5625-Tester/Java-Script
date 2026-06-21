let apicall = new Promise(function (resolve, reject) {
    let api = true;
    if (api) {
        resolve("api call ok");
    }
    else {
        reject("Api reject");
    }
})
apicall.then(function (responce) {
    console.log(responce);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("i will run no matter the it pass or fails");
})

