let apicall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User OK" });
})
//.then is function 
// .the will be use when we want resolve or responce to come.
// instead of passing resolve in the parameter we can pass any random name parameter like responce.
apicall.then(function (resolve) {
    console.log(resolve + " User is good");
    console.log(resolve);
    console.log(resolve.status);
    console.log(resolve.body);
})
//.then and .resovle are same
//.catch and .reject are same
//.then will only run when the promise is succesfully
// instead of using if else here we will use promise as it is async and we want the result in later 