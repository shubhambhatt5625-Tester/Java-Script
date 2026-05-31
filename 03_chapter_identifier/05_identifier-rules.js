// ============================================
// JAVASCRIPT IDENTIFIER RULES - EXAMPLES
// ============================================

// --------------------------------------------
// RULE 1: Must start with a letter, underscore, or dollar sign
// --------------------------------------------

// VALID - starting with a letter
var myVariable;
var Name;
var _private;
var $jqueryStyle;

// INVALID - uncomment to see errors:
// var 1stPlace;      // ERROR: starts with digit
// var my-variable;   // ERROR: hyphen not allowed (reserved for subtraction)
// var my variable;   // ERROR: space not allowed

// --------------------------------------------
// RULE 2: Subsequent characters can be letters, digits, underscores, or dollar signs
// --------------------------------------------

// VALID
var name1;
var name_2;
var name$3;
var _123;
var $abc123;
var first_name_last;

// --------------------------------------------
// RULE 3: Cannot be a reserved word / keyword
// --------------------------------------------

// INVALID - these are reserved words:
// var let;
// var const;
// var var;
// var function;
// var class;
// var return;
// var if;
// var else;
// var for;
// var while;
// var switch;
// var case;
// var break;
// var continue;
// var default;
// var try;
// var catch;
// var finally;
// var throw;
// var new;
// var this;
// var true;
// var false;
// var null;
// var undefined;
// var instanceof;
// var typeof;
// var void;
// var delete;
// var in;
// var of;
// var with;
// var debugger;
// var export;
// var import;
// var super;
// var extends;
// var static;
// var yield;
// var await;

// VALID - not reserved, even if they look like keywords
// var Let;         // 'L' is uppercase, different from lowercase 'let'
// var Const;
// var Function;
// var Class;

// --------------------------------------------
// RULE 4: Are case-sensitive
// --------------------------------------------

var myvar;
var myVar;
var MyVar;
var MYVAR;
// All four above are DIFFERENT identifiers

// --------------------------------------------
// RULE 5: Cannot contain spaces
// --------------------------------------------

// INVALID:
// var my variable;
// var first name;

// VALID - use camelCase or underscores instead:
var myVariable;
var my_variable;
var firstName;

// --------------------------------------------
// RULE 6: Should not start with a digit
// --------------------------------------------

// INVALID:
// var 1name;
// var 123abc;
// var 99_bottles;

// VALID - digits can appear after the first character:
var name1;
var abc123;
var bottles99;

// --------------------------------------------
// RULE 7: Unicode letters and escape sequences are allowed
// --------------------------------------------

// VALID - unicode letters
var αβγ;              // Greek letters
var 你好;             // Chinese characters
var हिंदी;            // Hindi characters
var переменная;       // Cyrillic (Russian)
var 변수;              // Korean (Hangul)
var café;
var naïve;
var Müller;

// VALID - using Unicode escape sequences
var \u006E\u0061\u006D\u0065;   // same as: var name;
var _\u0041;                     // same as: var _A;

// --------------------------------------------
// SUMMARY: Quick Reference Table
// --------------------------------------------

const examples = {
  // Valid identifiers
  valid: [
    "myVariable",    // starts with letter
    "_private",    // starts with underscore
    "$element",    // starts with dollar sign
    "name123",     // contains digits after first char
    "first_name",  // contains underscore
    "$123",        // starts with $, contains digits
    "αβγ",         // unicode letters
    "café",        // accented characters
    "你好",        // non-Latin scripts
    "MyClass",     // PascalCase
    "myFunction",  // camelCase
    "CONST_VALUE"  // UPPER_SNAKE_CASE
  ],

  // Invalid identifiers (will throw SyntaxError)
  invalid: [
    "1name",       // starts with digit
    "my-name",     // hyphen not allowed
    "my name",     // space not allowed
    "var",         // reserved keyword
    "function",    // reserved keyword
    "my@var",      // special characters not allowed (@, #, !, etc.)
    "my#var",
    "my!var",
    "my%var",
    "my&var",
    "my*var",
    "my(var)",
    "my.var",
    "my+var",
    "my=var",
    "my[var]",
    "my{var}",
    "my:var",
    "my;var",
    "my,var",
    "my<var>",
    "my?var",
    "my/var",
    "my\\var",
    "my|var",
    "my~var",
    "my`var",
    "my'var",
    'my"var',
  ]
};

console.log("=== JAVASCRIPT IDENTIFIER RULES ===");
console.log("\nValid identifiers:");
examples.valid.forEach((id, i) => console.log(`  ${i + 1}. ${id}`));

console.log("\nInvalid identifiers (SyntaxError if used):");
examples.invalid.forEach((id, i) => console.log(`  ${i + 1}. ${id}`));
