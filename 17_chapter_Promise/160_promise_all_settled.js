Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

// This is like a test report —
// you want results for ALL tests,
// not just stop at the first failure.

/*Imagine you are a teacher who gave 3 tests to 3 students:
- Test A → Passed ✅
- Test B → Failed ❌
- Test C → Passed ✅
Promise.allSettled is like the teacher saying:
"I will wait for ALL 3 tests to finish. I don't care if some passed or failed. I will collect every result and then show you the report card."
Promise.allSettled([
    Promise.resolve("Test A Passed!"),       // Student A passed
    Promise.reject("Test B failed"),          // Student B failed
    Promise.resolve("Test C passed")          // Student C passed
])
After all tests are done, the teacher gets a results array that looks like this:
[
  { status: "fulfilled", value: "Test A Passed!" },   // passed
  { status: "rejected",  reason: "Test B failed" },    // failed
  { status: "fulfilled", value: "Test C passed" }      // passed
]
Each result has:
- status → did it pass (fulfilled) or fail (rejected)?
- value → the answer if passed
- reason → the error if failed
forEach vs for loop
Using forEach (like reading each page of a notebook one by one)
results.forEach(function (r, i) {
    console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
});
- results → the report card
- .forEach(function(r, i)) → pick each result one by one
- r → the current result (one test)
- i → the index number (0, 1, 2)
- r.value || r.reason → if test passed show value, if failed show reason
Output:
Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B failed
Test 3: fulfilled - Test C passed
Same thing using a for loop
for (let i = 0; i < results.length; i++) {
    let r = results[i];
    console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
}
Same output:
Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B failed
Test 3: fulfilled - Test C passed
Simple rule: Use forEach when you just want to go through every item. Use for loop when you might need to stop early or skip items.*/