console.log(0 == "");
console.log("" == 0);
console.log(0 == "0");
console.log("" == 0);
console.log("0" == "");// transitivity broken
console.log("" == "0"); // transitivity broken
/*Here's why:
When using loose equality (==), JavaScript performs type coercion. The empty string "" gets converted to a number, and Number("") is 0. Therefore:
"" == 0     // true  ("" coerces to 0)
0 == "0"    // true  ("0" coerces to 0)
"" == "0"   // false (both are strings, compared directly).
This is a famous JavaScript quirk. It happens because each comparison uses different coercion rules:
-> "" == 0: String → Number coercion ("" becomes 0)
-> 0 == "0": String → Number coercion ("0" becomes 0)  
-> "" == "0": Both are strings, so no coercion—direct comparison fails*/

/*Use strict equality (===) to avoid these surprising behaviors:
"" === 0;    // false (no type coercion)
0 === "0";   // false (different types)
"" === "0";  // false
Strict equality checks both value and type, making your code more predictable.*/