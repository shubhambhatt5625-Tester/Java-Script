# Chapter 18 - Async/Await

This chapter covers `async/await` — syntactic sugar over Promises for writing cleaner asynchronous code, including error handling, parallel vs sequential execution.

## Files

| File | Description |
|------|-------------|
| `161_async.js` | `async` function with `try/catch/finally` and `await` on rejected Promise |
| `162_async2.js` | `await` with a function returning `Promise.resolve()` |
| `162.1_async.js` | Top-level `await` exploration (ES Module vs regular script) |
| `163_call_hell_doom.js` | Login flow rewritten from Promise chains to `async/await` |
| `164_async3.js` | `async` function returning value directly (implicit Promise) |
| `165_parallel.js` | Parallel execution using `Promise.allSettled()` with `async/await` |
| `166_squentially.js` | Sequential execution where each step depends on the previous |

## Key Takeaways

- `async` before a function makes it return a Promise implicitly.
- `await` pauses execution until the Promise resolves — only works inside `async` functions or ES Modules.
- `try/catch/finally` replaces `.then()/.catch()/.finally()` for error handling.
- Use `Promise.all()` / `Promise.allSettled()` with `await` for parallel execution.
- Sequential `await` is needed when each step depends on the previous result.
- `async/await` is syntactic sugar over Promises — same behavior, cleaner syntax.
