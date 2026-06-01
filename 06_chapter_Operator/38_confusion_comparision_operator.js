// ============================================================
// 38_confusion_comparision_operator.js
// Chapter 06: Operators — Exercise 38
// Topic: Confusion between == (Loose Equality) and === (Strict Equality)
// ============================================================
/*please create a exerise in 06_chapter_operator inside 38_confusion_comparision_operator.js 
and preaper for confusion oprator for == and === cases in js.*/

/*
  JavaScript has TWO equality operators:
    - ==  : Loose Equality (allows type coercion)
    - === : Strict Equality (NO type coercion — checks value AND type)

  ****Golden Rule: Prefer === over == to avoid unexpected bugs.****
  ============================================================
// TAKEAWAY:  Always use ===  (and !==).
// Use ==  only for null/undefined check:   if (x == null) { ... }
// Use Object.is for NaN and -0 edge cases.
// ============================================================


*/
//nan not a number
// --------------------------
// PART 1: PREDICT THE OUTPUT
// --------------------------
// Before running, guess the result for each console.log.
// Then uncomment and run to see if you were right.

// 1. String vs Number coercion
// console.log(5 == "5");      // Your guess: _____  (Actual: true)
// console.log(5 === "5");     // Your guess: _____  (Actual: false)

// 2. Empty string vs zero
// console.log("" == 0);       // Your guess: _____  (Actual: true)
// console.log("" === 0);      // Your guess: _____  (Actual: false)

// 3. Null vs undefined
// console.log(null == undefined);   // Your guess: _____  (Actual: true)
// console.log(null === undefined);  // Your guess: _____  (Actual: false)

// 4. Null vs zero
// console.log(null == 0);     // Your guess: _____  (Actual: false)
// console.log(null === 0);    // Your guess: _____  (Actual: false)

// 5. Undefined vs zero
// console.log(undefined == 0);  // Your guess: _____  (Actual: false)

// 6. Boolean coercion (tricky!)
// console.log(true == 1);     // Your guess: _____  (Actual: true)
// console.log(true === 1);    // Your guess: _____  (Actual: false)
// console.log(false == 0);    // Your guess: _____  (Actual: true)
// console.log(false === 0);   // Your guess: _____  (Actual: false)

// 7. String "true" vs boolean true
// console.log("true" == true);   // Your guess: _____  (Actual: false)
// console.log("true" === true);  // Your guess: _____  (Actual: false)

// 8. Empty string vs false
// console.log("" == false);   // Your guess: _____  (Actual: true)
// console.log("" === false);  // Your guess: _____  (Actual: false)

// 9. NaN — never equal to anything, even itself
// console.log(NaN == NaN);    // Your guess: _____  (Actual: false)
// console.log(NaN === NaN);   // Your guess: _____  (Actual: false)

// 10. Arrays/objects reference vs value
// console.log([1,2] == [1,2]);   // Your guess: _____  (Actual: false)
// console.log([1,2] === [1,2]);  // Your guess: _____  (Actual: false)

// 11. Array to string/number coercion
// console.log([1,2] == "1,2");   // Your guess: _____  (Actual: true)
// console.log([1,2] === "1,2");  // Your guess: _____  (Actual: false)

// 12. Empty array vs empty string vs zero
// console.log([] == "");      // Your guess: _____  (Actual: true)
// console.log([] == 0);       // Your guess: _____  (Actual: true)
// console.log("" == 0);       // Your guess: _____  (Actual: true)
// But transitivity breaks:
// console.log([] == "");      // true
// console.log("" == 0);       // true
// console.log([] == 0);       // true
// However:
// console.log([null] == 0);   // Your guess: _____  (Actual: true)
// console.log([undefined] == 0); // Your guess: _____  (Actual: true)


// --------------------------
// PART 2: THE TRANSITIVITY TRAP
// --------------------------
// In math, if A == B and B == C, then A == C.
// JavaScript breaks this rule with ==.

/*
  Example:
    A = "",  B = 0,  C = "0"

    "" == 0      → true
    0 == "0"     → true
    "" == "0"    → false   ← TRANSITIVITY BROKEN!

  YOUR TASK:
    1. Find one more triple (A, B, C) where == breaks transitivity.
    2. Write them below and test.
*/

// let A = _____;
// let B = _____;
// let C = _____;
// console.log(A == B);  // should be true
// console.log(B == C);  // should be true
// console.log(A == C);  // should be false  ← broken transitivity!


// --------------------------
// PART 3: FILL IN THE BLANKS
// --------------------------
// Complete the expressions so the result is true.

// A. Strict equality — same type AND value
// console.log(10 === _____);
// console.log("hello" === _____);
// console.log(true === _____);

// B. Loose equality — different types, but coerce to same value
// console.log(10 == _____);
// console.log("5" == _____);
// console.log(1 == _____);
// console.log(0 == _____);

// C. Make these false
// console.log(10 === _____);    // false
// console.log("hello" === _____); // false


// --------------------------
// PART 4: FIX THE BUGS
// --------------------------
// These functions have comparison bugs due to using == instead of ===.
// Fix them.

// 4.1
function isZero(value) {
    // Bug: returns true for "", false, "0" because of ==
    if (value == 0) {
        return "It's zero!";
    }
    return "Not zero.";
}
// console.log(isZero("0"));   // Should ideally be "Not zero." if we want strict number 0

// FIXED VERSION:
// function isZeroFixed(value) {
//     if (value === 0) { ... }
// }

// 4.2
function checkNull(value) {
    // Bug: == treats null and undefined as equal
    if (value == null) {
        return "Value is null or undefined";
    }
    return "Value is something else";
}
// console.log(checkNull(undefined)); // With ==, this enters the if-block.

// FIXED VERSION:
// function checkNullFixed(value) {
//     if (value === null) { ... }
// }


// --------------------------
// PART 5: SPOT THE DIFFERENCE
// --------------------------
// Each pair looks similar but behaves differently. Explain why.

// Pair 1:
// console.log(null == undefined);   // true
// console.log(null == false);       // false

// Pair 2:
// console.log(0 == false);          // true
// console.log("0" == false);        // true
// console.log("0" == 0);             // true
// console.log("" == false);         // true
// console.log("" == 0);             // true

// Pair 3:
// console.log([] == ![]);           // true (advanced coercion!)
// Hint: ![] is false, [] coerces to 0 or "", 0 == false is true

// YOUR EXPLANATION HERE:
// _____________________________________________________________


// --------------------------
// PART 6: WRITE YOUR OWN TESTS
// --------------------------
// Create 5 challenging == vs === comparisons.
// Write them below, predict the result, then verify with console.log.

// 1.
// console.log(_____ == _____);    // Guess: _____  Actual: _____
// console.log(_____ === _____);   // Guess: _____  Actual: _____

// 2.
// console.log(_____ == _____);    // Guess: _____  Actual: _____
// console.log(_____ === _____);   // Guess: _____  Actual: _____

// 3.
// console.log(_____ == _____);    // Guess: _____  Actual: _____
// console.log(_____ === _____);   // Guess: _____  Actual: _____

// 4.
// console.log(_____ == _____);    // Guess: _____  Actual: _____
// console.log(_____ === _____);   // Guess: _____  Actual: _____

// 5.
// console.log(_____ == _____);    // Guess: _____  Actual: _____
// console.log(_____ === _____);   // Guess: _____  Actual: _____


// --------------------------
// SUMMARY CHEAT SHEET
// --------------------------
/*
  ==  (Loose Equality) Rules:
  ---------------------------
  - If types are same → compare like ===
  - undefined == null → true (and ONLY this pair!)
  - One is number, other is string → convert string to number
  - One is boolean → convert boolean to number (true→1, false→0)
  - Object vs primitive → object calls ToPrimitive (usually valueOf/toString)

  === (Strict Equality) Rules:
  ----------------------------
  - If types differ → false (immediately)
  - If types same → compare values directly
  - NaN === NaN → false (special case)
  - +0 === -0 → true

  BEST PRACTICE:
  - Always use === and !== for comparisons.
  - Use == only if you explicitly understand and need coercion.
*/

