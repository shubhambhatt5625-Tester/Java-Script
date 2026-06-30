# JavaScript Learning Repository

A structured collection of JavaScript exercises and examples organized by chapters, covering fundamental to intermediate concepts.

---

## Repository Structure

| Chapter | Folder | Topics Covered |
|---------|--------|--------------|
| 01 | [`01_chapter_basic`](./01_chapter_basic/README.md) | Basics: `console.log`, setup verification |
| 02 | [`02_chapter`](./02_chapter/README.md) | Reserved keywords as variable names |
| 03 | [`03_chapter_identifier`](./03_chapter_identifier/README.md) | Identifiers, naming rules, comments, keyboard shortcuts |
| 04 | [`04_chaper_var_function_let_constant`](./04_chaper_var_function_let_constant/README.md) | Variables: `var`, `let`, `const`, functions, hoisting, scope |
| 05 | [`05_chapter_literals`](./05_chapter_literals/README.md) | Literals: numbers, strings, template literals, `null` vs `undefined` |
| 06 | [`06_chapter_Operator`](./06_chapter_Operator/README.md) | Operators: arithmetic, comparison, logical, ternary, increment/decrement |
| 07 | [`07_chapter_if_&_else_statement`](./07_chapter_if_&_else_statement/README.md) | Conditional statements: `if`, `else if`, `else`, real-world examples |
| 08 | [`08_chapter_switch`](./08_chapter_switch/README.md) | Switch statements, browser detection, test scores |
| 09 | [`09_User_Input`](./09_User_Input/README.md) | User input (upcoming) |
| 10 | [`10_chapter_Loop`](./10_chapter_Loop/README.md) | Loops: `for`, `while`, `do-while`, `continue`, `break`, FizzBuzz, IQ |
| 11 | [`11_chapter_Array`](./11_chapter_Array/README.md) | Arrays: creation, accessing, modifying, searching, iteration, sorting, slicing, concatenation |
| 12 | [`12_chapter_function`](./12_chapter_function/README.md) | Functions: basic, parameters, return types, expressions, arrow functions, closures, higher-order |
| 13 | [`13_chapter_string`](./13_chapter_string/README.md) | Strings: creation, searching, substring, transformation, conversion, cheat sheet |
| 14 | [`14_chapter_objects`](./14_chapter_objects/README.md) | Objects (upcoming) |
| 15 | [`15_chapter_2Darray_MultiArray`](./15_chapter_2Darray_MultiArray/README.md) | 2D/Multi-dimensional arrays: grid creation, real-world examples, array functions, pattern printing |
| 16 | [`16_chapter_callback`](./16_chapter_callback/README.md) | Callbacks: basics, callback hell, async vs sync, Playwright callbacks, parameters, return types |
| 17 | [`17_chapter_Promise`](./17_chapter_Promise/README.md) | Promises: `resolve`, `reject`, `.then()`, `.catch()`, `.finally()`, `Promise.all()`, `Promise.allSettled()` |
| 18 | [`18_chapter_async_await`](./18_chapter_async_await/README.md) | Async/Await: `async` functions, `await`, `try/catch/finally`, parallel vs sequential execution |
| 19 | [`19_chapter_playwright_basic`](./19_chapter_playwright_basic/README.md) | Playwright basics: setup, `@playwright/test`, config, test fixtures, page navigation, selectors, browser automation |
| 20 | [`20_chapter_Export_Import`](./20_chapter_Export_Import/) | Export/Import: ES modules, `export`, `import`, default exports, named exports |
| 21 | [`21_chapter_Class_and_object`](./21_chapter_Class_and_object/) | Classes & Objects: class syntax, constructors, inheritance, static methods, private vs public |
| 22 | [`22_chapter_encapsulation`](./22_chapter_encapsulation/) | Encapsulation: data hiding, getters/setters, real-world examples |

---

## How to Use

Each folder contains standalone `.js` files. You can run any file using Node.js:

```bash
node 01_chapter_basic/01_Basic.js
```

Or run directly inside browser DevTools by copying the code.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- Basic understanding of programming concepts
- VS Code or any code editor (see keyboard shortcuts in Chapter 03)

---

## Topics Summary

### Chapter 01 - Basics
- Printing to console
- Verifying setup

### Chapter 02 - Keywords
- Why reserved keywords cannot be used as identifiers

### Chapter 03 - Identifiers & Comments
- Rules for valid identifiers
- Case sensitivity (`camelCase`, `snake_case`, `PascalCase`)
- Single-line and multi-line comments
- VS Code / Browser / System keyboard shortcuts reference

### Chapter 04 - Variables, Functions, Scoping & Hoisting
- `var`, `let`, `const` declaration and differences
- Function declarations
- Scope: function scope vs block scope
- Hoisting behavior for `var`, `let`, `const`, and functions
- Common junior engineer mistakes

### Chapter 05 - Literals
- Number systems: Decimal, Binary, Octal, Hexadecimal
- `null` vs `undefined`
- String literals
- Template literals (backticks)
- Single vs double vs backtick quotes

### Chapter 06 - Operators
- Assignment operator (`=`)
- Arithmetic operators (`+`, `-`, `*`, `/`, `%`, `**`)
- Compound assignment operators
- Comparison operators (`==` vs `===`, loose vs strict)
- Logical operators (`&&`, `||`, `!`)
- String concatenation
- Ternary and nested ternary operators
- Type operators (`typeof`, `instanceof`)
- Pre and post increment/decrement (`++v`, `v++`)
- Nullish coalescing operator (`??`)
- Interview questions and advanced tricky expressions

### Chapter 07 - If & Else Statements
- Voting rights checker
- Percentage-based grade calculator
- Login system simulation
- API status code handling
- Username / password validation
- Odd / even checker
- Leap year detector
- IQ / puzzle questions

### Chapter 08 - Switch Statements
- Day of week selector
- Default case handling
- Real-world examples
- Browser compatibility checker
- Vowel checker
- Test score grading
- Switch IQ / puzzle questions

### Chapter 09 - User Input
- Upcoming content

### Chapter 10 - Loops
- `for` loop, `while` loop, `do-while` loop
- `continue` and `break` statements
- Table printing (normal and reverse)
- Loop with `if-else` combinations
- FizzBuzz practice
- Triangle classifier
- Loop IQ / puzzle questions

### Chapter 11 - Arrays
- Array creation and accessing elements
- Modifying array elements
- Adding elements (`push`, `unshift`, `splice`)
- Removing elements (`pop`, `shift`, `splice`)
- Searching (`indexOf`, `includes`, `find`)
- Iteration (`for`, `forEach`, `for...of`)
- Transformation (`map`, `filter`, `reduce`)
- Sorting (`sort`, `reverse`)
- Slicing (`slice`)
- Concatenation (`concat`)
- Array checking (`Array.isArray`)
- Real-world examples (shopping cart, to-do list)

### Chapter 12 - Functions
- Basic function declarations
- Parameters with no return
- Parameters with return
- Return type with no parameters
- Template literals in functions
- Function expressions
- Arrow functions
- IIFE (Immediately Invoked Function Expression)
- Default, rest, and spread parameters
- Scope and closures
- Higher-order functions

### Chapter 13 - Strings
- String creation (single, double, template literals)
- String properties (`length`)
- Searching in strings (`includes`, `indexOf`, `search`)
- Substring extraction (`slice`, `substring`, `substr`)
- String transformation (`toUpperCase`, `toLowerCase`, `trim`, `replace`)
- String conversion (`toString`, `String()`, `Number()`)
- Complete string methods cheat sheet

### Chapter 14 - Objects
- Upcoming content

### Chapter 15 - 2D Arrays & Multi-dimensional Arrays
- 2D array creation and accessing elements
- Grid representation and manipulation
- Real-world examples (matrices, tables)
- Array functions with 2D arrays
- Pattern printing exercises

### Chapter 16 - Callbacks
- Callback function basics
- Callback hell and its problems
- Synchronous vs asynchronous execution
- Playwright callback examples
- Callbacks with parameters
- Callback return types
- Real-world callback examples

### Chapter 17 - Promises
- Promise basics: `resolve` and `reject`
- `.then()` for handling resolved values
- `.catch()` for handling rejected values
- `.finally()` for cleanup code
- Chaining multiple Promises
- `Promise.all()` — all-or-nothing execution
- `Promise.allSettled()` — collect all results regardless of outcome

### Chapter 18 - Async/Await
- `async` function basics
- `await` keyword usage
- `try/catch/finally` with async/await
- Top-level await (ES Modules)
- Rewriting Promise chains with async/await
- Parallel execution with `Promise.allSettled()`
- Sequential execution with dependent steps

### Chapter 19 - Playwright Basics
- Playwright installation and setup
- Browser automation fundamentals
- Page navigation and selectors
- `@playwright/test` configuration (`playwright.config.ts`)
- Test fixtures: `page`, `test`, `expect`
- Writing and running Playwright tests
- Multi-browser support (Chromium, Firefox, WebKit)
- HTML reporter and trace viewer

### Chapter 20 - Export/Import (ES Modules)
- ES module syntax: `export` and `import`
- Named exports and imports
- Default exports and imports
- Module utilities and test utilities

### Chapter 21 - Classes and Objects
- Class syntax and declarations
- Constructors and object instantiation
- Inheritance and method overriding
- Static methods and properties
- Private vs public class members
- Real-world class examples (browser automation, car, IQ)

### Chapter 22 - Encapsulation
- Data hiding and access control
- Getters and setters
- Real-world encapsulation examples (bank, car)
- Practical OOP patterns

---

## Author

**Shubham Bhatt**

This repository is a personal learning journey through core JavaScript concepts.
