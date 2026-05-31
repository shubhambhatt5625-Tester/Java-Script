// ============================================
// 23 - null vs undefined in JavaScript
// ============================================

// --------------------------------------------
// 1. undefined
// --------------------------------------------
// - It means: "Something is missing or not assigned yet."
// - JavaScript itself gives this value automatically.

let box;                    // Declared a variable but did not put anything inside
console.log(box);           // Output: undefined
console.log(typeof box);    // Output: "undefined"

// Example: function that does not return anything
function doNothing() {}
let result = doNothing();
console.log(result);        // Output: undefined


// --------------------------------------------
// 2. null
// --------------------------------------------
// - It means: "There is intentionally nothing here."
// - A programmer (you) sets this value on purpose.

let emptyBox = null;
console.log(emptyBox);      // Output: null
console.log(typeof emptyBox); // Output: "object"  (this is a known JS bug!)


// --------------------------------------------
// 3. Simple difference table
// --------------------------------------------
//
// | Feature        | undefined              | null                      |
// |----------------|------------------------|---------------------------|
// | Meaning        | Not assigned yet       | Intentionally empty       |
// | Who sets it?   | JavaScript automatic   | Programmer (you)          |
// | Type (typeof)  | "undefined"            | "object" (special case)   |
// | Value          | undefined              | null                      |


// --------------------------------------------
// 4. Equality check
// --------------------------------------------
console.log(undefined == null);   // true  (loose equality: they look alike)
console.log(undefined === null);  // false (strict equality: different types)


// --------------------------------------------
// 5. Real-life analogy
// --------------------------------------------
// undefined = You ask for a coffee. The shop says "We haven't decided the price yet."
// null      = You ask for a coffee. The shop says "We intentionally have no coffee today."
