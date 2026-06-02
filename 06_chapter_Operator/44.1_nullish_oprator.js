// The Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand
// when the left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
// if some thing is null then it will asign the value, if not null then they do not aggign the value.
// ?? in nothing but checking the value of null.
// in morden ts we will use ? operator for the same.
// ? is use in ts and ?? is use in js.
// nulliesh ?? operator say if amul is null then it assign the mother dairy value to milk_required.

let amul = null
let milk_required = amul ?? "mother dairy";
console.log(milk_required);
// nulliesh ?? operator say if amul1 is 1 then it assign the amul1 value to milk_required.
let amul1 = 1;
let required_milk = amul1 ?? "mother dairy"
console.log(required_milk);