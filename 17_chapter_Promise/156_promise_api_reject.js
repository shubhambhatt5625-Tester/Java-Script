let apicall = new Promise(function (resolve, reject) {
    // reject({ status: 500, body: "User is not valid" });// due to object present we have write in this way 
    reject("500");
})
//.catch is function 
// .catch will be use when we want reject or fail thing to come.
// instead of passing reject in the parameter we can pass any random name parameter like fail.
apicall.catch(function (reject) {
    console.log(reject + " User is bad");
    console.log(reject);
    //console.log(reject.status);
    //console.log(reject.body);
})
//.then and .resovle are same
//.catch and .reject are same
//.catch will only run when the promise is failing.
// instead of using if else here we will use promise as it is async and we want the result in later 