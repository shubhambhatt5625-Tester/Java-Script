// Difference between Backtick, Single, and Double Quotes in JavaScript:
// Single ('') and Double ("") quotes are identical for plain strings.
// Backticks (``) allow string interpolation (embedded variables/expressions) and multi-line strings.

let name = "John";

// Single quotes
let single = 'Hello ' + name;
console.log("Single:", single);

// Double quotes
let double = "Hello " + name;
console.log("Double:", double);

// Backticks (Template Literals)
let backtick = `Hello ${name}`;
console.log("Backtick:", backtick);

// Multi-line only works with backticks
let multi = `Line 1
Line 2`;
console.log("Multi-line:\n" + multi);
