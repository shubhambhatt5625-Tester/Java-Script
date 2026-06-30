# Chapter 20 - Export/Import (ES Modules)

This chapter covers ES module syntax — `export` and `import` for sharing code between files, including named exports, default exports, and aliasing.

## Files

| File | Description |
|------|-------------|
| `utils.js` | Named exports: `BASE_URL`, `formatTestName` |
| `testutils.js` | Named exports: `BASE_URL`, `formatUpperCaseString` |
| `logger.js` | Default export (`log`) + named export (`log2`) |
| `168_import_from_export.js` | Imports named exports from `testutils.js` |
| `169_utils.js` | Imports named exports with `as` aliasing |
| `170_logger.js` | Imports default and named exports from `logger.js` |
| `ExplainDefault.md` | Detailed explanation of `export` vs `export default` |

## Key Takeaways

- Named exports use `export` keyword; import name must match (or alias with `as`).
- Default export uses `export default`; only one per file; import name is flexible.
- A module can have both default and named exports.
- Import syntax: `import { x } from` (named) vs `import x from` (default).
- Use `as` to rename imports and avoid name collisions across modules.
