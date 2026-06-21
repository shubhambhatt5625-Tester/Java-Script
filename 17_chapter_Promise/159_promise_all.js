let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are fine!");
})
// if one reject or fails then the fail result will come 
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (error) {
    console.log("Failed:", error);
}).finally(function () {
    console.log("Put any thing here i will pass");
})