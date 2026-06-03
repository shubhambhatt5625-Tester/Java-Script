# Chapter 06 - Operators

A comprehensive chapter covering all major JavaScript operators from basic assignment to advanced interview puzzles.

## Files

| File | Description |
|------|-------------|
| `30_Assignment_Operator.js` | `=` assignment operator |
| `31_arithmatic_operator.js` | `+`, `-`, `*`, `/` operators |
| `32_modulus_operator.js` | `%` remainder operator |
| `33_exponantional_operator.js` | `**` exponentiation operator |
| `34_compound_operator.js` | Compound assignments: `+=`, `-=`, `*=`, `/=` |
| `35_comparision_operator.js` | Relational operators: `>`, `<`, `>=`, `<=` |
| `36_comparision_operator_strict_loose.js` | Loose (`==`) vs strict (`===`) equality |
| `37_comparision_transitivity_broken.js` | Why `==` transitivity can break |
| `38_confusion_comparision_operator.js` | Common `==` vs `===` confusion exercises |
| `39_logical_operator.js` | `&&`, `||`, `!` |
| `40_string_concatenate_operator.js` | String concatenation with `+` |
| `41_ternary_operator.js` | Ternary / conditional operator (`? :`) |
| `41.1_nested_ternary_operators.js` | Nested ternary examples |
| `42_type_operator.js` | `typeof` and `instanceof` |
| `43_pre_increament_operator.js` | Pre-increment (`++v`) |
| `43.1_post_increament.js` | Post-increment (`v++`) |
| `44_null_operator.js` | `null` related checks |
| `44.1_nullish_oprator.js` | Nullish coalescing operator (`??`) |
| `45_pre_decreament_operator.js` | Pre-decrement (`--v`) |
| `45.1_post_decreament.js` | Post-decrement (`v--`) |
| `46_interview_question.js` | Operator-based interview questions |
| `47_advance_ID.js` | Advanced tricky increment expressions |

## Key Takeaways

- Always prefer `===` and `!==` over `==` and `!=` to avoid type coercion bugs.
- `++v` increments before use; `v++` increments after use.
- `??` only falls back for `null` or `undefined`, unlike `||` which falls back for all falsy values.
- Operator precedence determines how complex expressions are evaluated.
