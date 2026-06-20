
//sync
console.log("A");
console.log("B"); // waits for A

//async
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C"); // runs immediately, doesn't wait for B
// Output: A, C, B


console.log("First Line print got executed due to sync");
setTimeout(function () {
    console.log("Second Line Print Will be delay 2 second due to aync due to time out");
}, 2000);
console.log("Thrid Line will be print before 2nd line due to sync");

/*Synchronous (Sync): Executes code line-by-line. Each operation waits for the previous one to finish. Blocks execution if a task takes time.
console.log("A");
console.log("B"); // waits for A
Asynchronous (Async): Allows code to continue while waiting for long-running tasks (API calls, timers, file I/O). Uses callbacks, Promises, or async/await.
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C"); // runs immediately, doesn't wait for B
// Output: A, C, B*/