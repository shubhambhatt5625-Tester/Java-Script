// ============================================
// 26 - Literal: All Number Types in JavaScript
// ============================================

// In JavaScript, numbers are internally stored as 64-bit floating point (IEEE 754).
// You can write the same number using different bases (systems).


// --------------------------------------------
// 1. Decimal Number System - Base 10
// --------------------------------------------
// Digits used: 0 to 9
// No prefix needed.

let decimal = 255;
console.log("Decimal     :", decimal);        // 255


// --------------------------------------------
// 2. Binary Number System - Base 2
// --------------------------------------------
// Digits used: 0 and 1
// Prefix: 0b or 0B

let binary = 0b11111111;
console.log("Binary      :", binary);         // 255


// --------------------------------------------
// 3. Octal Number System - Base 8
// --------------------------------------------
// Digits used: 0 to 7
// Prefix: 0o or 0O

let octal = 0o377;
console.log("Octal       :", octal);            // 255


// --------------------------------------------
// 4. Hexadecimal Number System - Base 16
// --------------------------------------------
// Digits used: 0 to 9 and A to F (or a to f)
// Prefix: 0x or 0X

let hex = 0xFF;
console.log("Hexadecimal :", hex);              // 255


// --------------------------------------------
// Summary Table
// --------------------------------------------
// | System      | Base | Prefix   | Example |
// |-------------|------|----------|---------|
// | Decimal     | 10   | (none)   | 255     |
// | Binary      | 2    | 0b / 0B  | 0b11111111 |
// | Octal       | 8    | 0o / 0O  | 0o377   |
// | Hexadecimal | 16   | 0x / 0X  | 0xFF    |


// --------------------------------------------
// Important Notes
// --------------------------------------------
// 1. All of the above are just different ways to write the SAME number (255).
// 2. JavaScript converts them all to decimal when you print or use them.
// 3. toString(base) lets you convert back to any base:

let num = 255;
console.log("To Binary  :", num.toString(2));   // "11111111"
console.log("To Octal   :", num.toString(8));   // "377"
console.log("To Hex     :", num.toString(16));  // "ff"
console.log("To Decimal :", num.toString(10));  // "255"


/*
  | Type/Form          | Example            | Notes                          |
  |--------------------|--------------------|--------------------------------|
  | Decimal Integer    | 42                 | Standard whole numbers         |
  | Binary             | 0b1010             | Base 2, starts with 0b         |
  | Octal              | 0o52               | Base 8, starts with 0o         |
  | Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
  | Float              | 3.14               | Decimal numbers                |
  | Exponential        | 1.5e3              | Scientific notation            |
  | Numeric Separator  | 1_000_000          | ES2021+, for readability       |
  | BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
  | Infinity           | Infinity           | Result of division by zero     |
  | NaN                | NaN                | Invalid numeric operation      |
  | Number Object      | new Number(42)     | Avoid, use primitive           |
*/
