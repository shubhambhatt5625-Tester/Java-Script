# Chapter 21 - Classes and Objects

This chapter covers JavaScript classes — class syntax, constructors, object instantiation, static members, and private vs public access modifiers.

## Files

| File | Description |
|------|-------------|
| `171_classandobject.js` | Basic class definition with attributes and methods |
| `172_constructorclass_and_object.js` | Constructor behavior and `new` keyword |
| `173_car.js` | Car class with real-world attributes and methods |
| `174_realbrowser.js` | Browser automation class example |
| `175_IQ.js` | Class-based interview/puzzle questions |
| `176_Private _vs_public.js` | Private (`#`) vs public members with `Credentials` class |
| `177_static.js` | Static properties accessed via class name |
| `178_static2.js` | Static methods and properties continued |

## Key Takeaways

- Classes are blueprints for creating objects with `new`.
- `constructor()` runs automatically on object creation to initialize properties.
- `this` refers to the current instance inside class methods.
- Private fields use `#` prefix — not accessible outside the class.
- Public fields are accessible from outside the class.
- `static` members belong to the class itself, not instances — access via `ClassName.member`.
- Methods can have return types; wrapping `console.log()` around a void method prints `undefined`.
