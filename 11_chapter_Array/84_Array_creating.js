// prefered way to create an array is 
let browser = ["chrome", "safari", "opera"]


// Second way is through array constructor
// new is keyword
let s = new Array(3); // it is empty array created.
let w = new Array(1, 3, 4);
console.log(s);
console.log(w);
// third way 
let test = Array.of(10, 20, 30);
console.log(test);
// only use for character. but it is consider good way.
let chars = Array.from("hello")
console.log(chars);
