function test(testName, callback) {
    console.log(testName);
    callback();
}
// the above one will  be hidden. so to call it import will be use
// import { test } from '@playwright/test';

test("Verify Login page is working", () => {
    // Write your Playwright Code//.
});