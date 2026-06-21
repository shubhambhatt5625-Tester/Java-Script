Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed")
]).then(function (results) {
    console.log(results);  // 👈 Just print it and see!
})

/*this is i am doing first time so how would i knonw that this will the status and this will be the value
+ Thought: 2.0s
Great question! You don't need to memorize it. Here's how you can find out:
1. MDN Documentation (Your Best Friend)
Whenever you see a new JavaScript method, search:
Promise.allSettled MDN
The MDN docs will show you exactly what it returns:
Each result object has:
- "status": "fulfilled" or "rejected"
- "value": (if fulfilled)
- "reason": (if rejected)
2. Console.log to Explore
If you're confused, just log it and see:
Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed")
]).then(function (results) {
    console.log(results);  // 👈 Just print it and see!
})
Output you'll see:
[
  { status: "fulfilled", value: "Test A Passed!" },
  { status: "rejected", reason: "Test B failed" }
]
Now you can see with your own eyes that each item has status, value, and reason.
3. Simple Trick to Remember
Promise result	status	what it has
resolve("hello")	"fulfilled"	value → "hello"
reject("error")	"rejected"	reason → "error"
Think of it like a report card:
- Pass → status = "fulfilled", you get a value (your marks)
- Fail → status = "rejected", you get a reason (why you failed)
Bottom Line
You don't memorize. You log it, read the docs, and practice. Every developer does this.
▣  Build · Qwen3.7 Plus · 16.2s
which doc
+ Thought: 1.9s
MDN Web Docs (Mozilla Developer Network)
Website: developer.mozilla.org
For your specific question, search:
Promise.allSettled MDN
Direct link format:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
Why MDN?
- Official and most accurate
- Has examples
- Shows browser compatibility
- Free
Other good resources:
- javascript.info → beginner-friendly tutorials
- w3schools.com → simple examples (less detailed)*/