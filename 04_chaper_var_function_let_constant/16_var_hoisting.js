// js engine 
// line by line , JIT (Just In Time) compilation.

console.log(greeting);//output -->undefined
var greeting = "Hello!";//assinging the value
console.log(greeting); //output -->hello!

//behiend the scene it will be like this:

//var greeting;//declaration hoisted with undefined value
//console.log(greeting);//undefined
//greeting = "Hello!";//assinging the value
//console.log(greeting);//hello!