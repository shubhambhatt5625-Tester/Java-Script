# Chapter 22 - Encapsulation

This chapter covers encapsulation — data hiding using private fields, getters/setters, and real-world OOP examples.

## Files

| File | Description |
|------|-------------|
| `179_encap.js` | Bank account with private `#balance`, `deposit()`, and `getbalance()` |
| `180_real_example.js` | Person class with private children fields, getters/setters |
| `181_car_encap.js` | Car class with encapsulated properties |
| `182_encap_bank.js` | ICICI bank class with role-based `setBalance()` (cashier check) |

## Key Takeaways

- Encapsulation hides internal state using private fields (`#`).
- Access private data through public getter and setter methods.
- Setters can include validation or authorization logic (e.g., cashier check).
- Protects data from unauthorized access and modification.
- `#` prefix makes a field private in JS (equivalent to `private` in TypeScript).
