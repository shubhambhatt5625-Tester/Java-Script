# Chapter 17 - Promises

This chapter covers JavaScript Promises — handling asynchronous operations with `resolve`, `reject`, `.then()`, `.catch()`, `.finally()`, `Promise.all()`, and `Promise.allSettled()`.

## Files

| File | Description |
|------|-------------|
| `154_promise.js` | Basic Promise with `resolve` and `reject` |
| `155_promise_apicall.js` | Promise `.then()` with API call simulation |
| `156_promise_api_reject.js` | Promise `.catch()` with API rejection |
| `157_promise_finally.js` | Promise chaining with `.then()`, `.catch()`, and `.finally()` |
| `158_call_by_promise.js` | Chaining multiple Promise-based steps (login flow) |
| `159_promise_all.js` | `Promise.all()` — all-or-nothing execution |
| `160_promise_all_settled.js` | `Promise.allSettled()` — collect all results regardless of pass/fail |
| `160.1_explainpromise_all,allsettled_explain.js` | Explanation and exploration of `allSettled` output structure |

## Key Takeaways

- A Promise represents a value that may be available now, later, or never.
- `.then()` handles resolved values; `.catch()` handles rejected values.
- `.finally()` runs regardless of outcome.
- `Promise.all()` fails fast — if any promise rejects, the whole chain rejects.
- `Promise.allSettled()` waits for all promises and returns status + value/reason for each.
- Promises replace callback hell with cleaner chaining.
