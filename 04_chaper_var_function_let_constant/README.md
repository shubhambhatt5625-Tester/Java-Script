# Chapter 04 - Variables, Functions, Let, Const & Hoisting

This chapter dives deep into how variables and functions are declared, scoped, and hoisted in JavaScript.

## Files

| File | Description |
|------|-------------|
| `09_var_let_constant_in_variable.js` | Introduction to `var`, `let`, and `constant` |
| `10_function_in_js.js` | Function declarations and calls |
| `11_var_explained.js` | Detailed behavior of `var` |
| `12_let_concept.js` | Detailed behavior of `let` |
| `13_const_explain.js` | Detailed behavior of `const` |
| `14_var_function_scope.js` | `var` scoping inside functions |
| `15_let_scope.js` | `let` block-level scoping |
| `16_var_hoisting.js` | Hoisting of `var` declarations |
| `17_function_hoisting.js` | Hoisting of function declarations |
| `18_let_hoisting.js` | Temporal Dead Zone (TDZ) for `let` |
| `19_let_block_hoisting.js` | Block-scoped hoisting behavior of `let` |
| `20_const_hoisting.js` | Hoisting behavior of `const` |
| `21_Jr_enginner_mistake.js` | Common mistakes junior developers make |

## Key Takeaways

- `var` is function-scoped and hoisted (initialized as `undefined`).
- `let` and `const` are block-scoped and also hoisted but live in the Temporal Dead Zone (TDZ) until declared.
- `const` requires initialization at declaration and cannot be reassigned.
- Function declarations are fully hoisted (body too).
- Avoid `var` in modern code; prefer `let` or `const`.
