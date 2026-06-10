function retry(testname, maxretry, delay) {
    console.log(`Retrying ${testname} up to ${maxretry} times and got ${delay} second delay`);
}
retry("Login", 3, 1000)

function retry1(testname, maxretry = 5, delay = 2000) {
    console.log(`Retrying ${testname} up to ${maxretry} times and got ${delay} second delay`);
}
retry1("Login")