// Real QA Scenario: End-to-End Login for the App.vwo.com
// openbrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()

function Openbrowser(callback) {
    console.log("Open the Browser");
    setTimeout(function () {
        callback();
    }, 1000);
}

function gotologinpage(callback) {
    console.log("Login Page Open");
    setTimeout(function () {
        callback();
    }, 1000);
}
function enterCredentials(callback) {
    console.log("Enter Credentials");
    setTimeout(function () {
        callback();
    }, 1000);
}
function clickLogin(callback) {
    console.log("Clicked on Login Button");
    setTimeout(function () {
        callback();
    }, 1000);
}
Openbrowser(function () {
    gotologinpage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("callback done-->Test Completed");
            })
        })
    })
})