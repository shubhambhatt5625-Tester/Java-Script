console.log(x);
//TDZ has started here
let x = 100;
console.log(x);


// output will be
// ReferenceError: Cannot access 'x' before initialization
// 100