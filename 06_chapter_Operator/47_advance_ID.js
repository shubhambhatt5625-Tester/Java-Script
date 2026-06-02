// let say ++v= A, so here it increase the value of A = 12 and then it assign the value to v = 12,
// so A + v = 24,

let v = 11;
console.log(++v + v);
console.log(v);
// here f++ = A, so it first assign the value to A =11 and then it increase the value of A = 12 
// now ++f = B , So it will incease the value of B = 13 and then it will assign the value.
// f 13 
let f = 11;
console.log(f++ + ++f);
console.log(f);