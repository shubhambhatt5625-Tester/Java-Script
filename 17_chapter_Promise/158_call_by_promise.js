function openbrowser() {
    return new Promise(function (resolve) {
        resolve("Step 1->browser open");
    }
    )
}
function loginpage() {
    return new Promise(function (resolve) {
        resolve("Step 2->login page open")
    })
}
function entercrenditals() {
    return new Promise(function (resolve) {
        resolve("Step 3-> Crensitals Enter")
    })
}
function clicklogibutton() {
    return new Promise(function (resolve) {
        resolve("Step 4-> Clicked Login Page")
    })
}

openbrowser().then(function (responce) {
    console.log(responce);
    return loginpage();
}).then(function (responce1) {
    console.log(responce1);
    return entercrenditals();
}).then(function (responce2) {
    console.log(responce2);
    return clicklogibutton();
}).then(function (responce3) {
    console.log(responce3);
}).finally(function () {
    console.log("Log In Done Welcome User");
})