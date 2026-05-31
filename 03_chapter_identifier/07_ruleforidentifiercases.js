// ============================================
// JAVASCRIPT IDENTIFIER RULES & NAMING CASES
// ============================================

// --------------------------------------------
// RULE 1: Must start with a letter, underscore, or dollar sign
// --------------------------------------------

var myVariable;    // starts with letter
var _private;      // starts with underscore
var $jqueryStyle;  // starts with dollar sign

// --------------------------------------------
// RULE 2: Subsequent characters can be letters, digits, underscores, or dollar signs
// --------------------------------------------

var name1;
var name_2;
var name$3;
var _123;
var $abc123;
var first_name_last;

// --------------------------------------------
// RULE 3: Cannot be a reserved word / keyword
// --------------------------------------------

// INVALID - reserved words:
// var let;       // ERROR
// var const;     // ERROR
// var function;  // ERROR
// var class;     // ERROR
// var return;    // ERROR
// var if;        // ERROR
// var else;      // ERROR
// var for;       // ERROR
// var while;     // ERROR
// var switch;    // ERROR
// var case;      // ERROR
// var break;     // ERROR
// var continue;  // ERROR
// var default;   // ERROR
// var try;       // ERROR
// var catch;     // ERROR
// var finally;   // ERROR
// var throw;     // ERROR
// var new;       // ERROR
// var this;      // ERROR
// var true;      // ERROR
// var false;     // ERROR
// var null;      // ERROR
// var undefined; // ERROR
// var instanceof;// ERROR
// var typeof;    // ERROR
// var void;      // ERROR
// var delete;    // ERROR
// var in;        // ERROR
// var of;        // ERROR
// var with;      // ERROR
// var debugger;  // ERROR
// var export;    // ERROR
// var import;    // ERROR
// var super;     // ERROR
// var extends;   // ERROR
// var static;    // ERROR
// var yield;     // ERROR
// var await;     // ERROR

// --------------------------------------------
// RULE 4: Are case-sensitive
// --------------------------------------------

var myvar;
var myVar;
var MyVar;
var MYVAR;
// All four are DIFFERENT identifiers

// --------------------------------------------
// RULE 5: Cannot contain spaces
// --------------------------------------------

// INVALID:
// var my variable;
// var first name;

// VALID:
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

// VALID:
var name1;
var abc123;
var bottles99;

// --------------------------------------------
// RULE 7: Unicode letters and escape sequences are allowed
// --------------------------------------------

var αβγ;              // Greek letters
var 你好;             // Chinese characters
var हिंदी;            // Hindi characters
var переменная;       // Cyrillic (Russian)
var 변수;              // Korean (Hangul)
var café;
var naïve;
var Müller;

// Unicode escape sequences
var \u006E\u0061\u006D\u0065;   // same as: var name;
var _\u0041;                     // same as: var _A;

// ============================================
// NAMING CONVENTIONS (CASES)
// ============================================

// --------------------------------------------
// CAMEL CASE
// First letter lowercase, each subsequent word capitalized
// Commonly used for: variables, functions, methods
// --------------------------------------------

var firstName;
var lastName;
var totalAmount;
var isActive;
var getUserData;
var calculateTotalPrice;
var updateUserProfile;
var fetchApiResponse;

function getUserName() { return "John"; }
function calculateArea(width, height) { return width * height; }
function isEmailValid(email) { return email.includes("@"); }

// --------------------------------------------
// PASCAL CASE (Upper Camel Case)
// First letter of every word capitalized
// Commonly used for: class names, constructor functions, enums, React components
// --------------------------------------------

var UserProfile;
var MyShoppingCart;
var ProductDetails;
var OrderHistory;
var PaymentGateway;
var DatabaseConnection;
var ApiResponseHandler;
var FileUploadManager;

// JavaScript classes (PascalCase by convention)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
}

class ApiService {
  getData() {
    return "data";
  }
}

class UserAuthentication {
  login(username, password) {
    return true;
  }
  logout() {
    return false;
  }
}

// --------------------------------------------
// SNAKE CASE (Lower Snake Case)
// All lowercase with underscores between words
// Commonly used for: file names, database fields, some API keys
// --------------------------------------------

var first_name;
var last_name;
var total_amount;
var is_active;
var user_data;
var order_history;
var api_response;
var file_upload_path;
var database_connection_string;
var maximum_retry_count;

// --------------------------------------------
// SCREAMING SNAKE CASE (Upper Snake Case)
// All uppercase with underscores between words
// Commonly used for: constants, environment variables, configuration values
// --------------------------------------------

const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DATABASE_HOST = "localhost";
const DEFAULT_TIMEOUT = 5000;
const PI_VALUE = 3.14159;
const ERROR_MESSAGE_INVALID_INPUT = "Invalid input provided";
const CONFIG_FILE_PATH = "/etc/config/app.json";
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_FOUND = 404;
const MAX_FILE_SIZE_BYTES = 10485760;
const SECRET_API_KEY = "sk-1234567890abcdef";
const ENVIRONMENT = "production";

// --------------------------------------------
// KEBAB CASE (Dash Case, Hyphen Case, Lisp Case)
// All lowercase with hyphens between words
// NOT valid for JavaScript identifiers (hyphen is subtraction operator)
// Commonly used for: CSS class names, HTML attributes, file names, URLs
// --------------------------------------------

// INVALID as JavaScript variable names:
// var first-name;     // ERROR: interpreted as first minus name
// var total-amount;   // ERROR
// var is-active;      // ERROR

// Valid in CSS classes:
// .user-profile { }
// .shopping-cart { }
// .product-details { }
// .nav-bar-item { }

// Valid in file names:
// my-script.js
// user-profile.html
// style-sheet.css
// api-service.test.js

// Valid in URLs:
// /user-profile/settings
// /product-details/12345

// --------------------------------------------
// HUNGARIAN NOTATION
// Prefix indicates data type or scope
// Less common in modern JavaScript, but historically used
// --------------------------------------------

// Type prefixes
var strName = "John";           // str = string
var nAge = 25;                  // n = number
var bIsActive = true;           // b = boolean
var arrUsers = [];              // arr = array
var objUser = {};               // obj = object
var fnCallback = function() {}; // fn = function
var elButton = null;            // el = DOM element
var rePattern = /abc/;          // re = regular expression

// Scope prefixes
var gGlobalVar = "global";      // g = global
var lLocalVar = "local";        // l = local (function scope)

// --------------------------------------------
// OTHER NOTABLE CONVENTIONS
// --------------------------------------------

// Private properties (underscore prefix - convention only, not enforced)
class BankAccount {
  constructor() {
    this._balance = 0;          // intended to be private
    this._accountNumber = "";   // intended to be private
  }
}

// jQuery style (dollar prefix for jQuery objects)
var $header = null;             // would hold jQuery object
var $submitButton = null;       // would hold jQuery object
var $modal = null;              // would hold jQuery object

// Boolean variables (is/has/should/can prefix)
var isVisible;
var isLoading;
var hasPermission;
var hasError;
var shouldUpdate;
var canEdit;
var shouldDisplay;
var isAuthenticated;
var hasChildren;
var canDelete;

// Event handlers (on/handle prefix)
function onClick() {}
function onSubmit() {}
function handleChange() {}
function handleError() {}
function onMouseEnter() {}
function handleFormSubmit() {}

// Callbacks (cb/callback suffix)
function fetchData(cb) {}
function processFile(callback) {}
function readStream(onData) {}

// ============================================
// NAMING CONVENTION BEST PRACTICES
// ============================================

// 1. Use camelCase for variables and functions
var userCount = 0;
function getUserCount() { return userCount; }

// 2. Use PascalCase for classes and constructors
class UserAccount {}
function UserAccountConstructor() {}

// 3. Use UPPER_SNAKE_CASE for constants
const MAX_RETRIES = 3;
const API_KEY = "xyz123";

// 4. Use snake_case for object keys matching database fields
var userRecord = {
  first_name: "John",
  last_name: "Doe",
  created_at: "2024-01-01",
  updated_at: "2024-06-01"
};

// 5. Use descriptive names - avoid single letters except in loops
// BAD:
// var x = 10;
// var fn = function() {};

// GOOD:
var userAge = 10;
var calculateTotal = function() {};

// 6. Avoid vague names
// BAD:
// var data = [];
// var temp = 0;
// var val = "";

// GOOD:
var userList = [];
var totalPrice = 0;
var emailAddress = "";

// ============================================
// SUMMARY TABLE
// ============================================

var namingConventions = {
  camelCase: {
    pattern: "firstName, getUserData",
    usedFor: "Variables, Functions, Methods",
    example: "const firstName = 'John'; function getData() {}"
  },
  PascalCase: {
    pattern: "FirstName, GetUserData",
    usedFor: "Classes, Constructors, Components, Enums",
    example: "class UserAccount {} function Component() {}"
  },
  snake_case: {
    pattern: "first_name, get_user_data",
    usedFor: "File names, Database fields, Object keys",
    example: "const first_name = 'John'; { user_id: 1 }"
  },
  SCREAMING_SNAKE_CASE: {
    pattern: "FIRST_NAME, GET_USER_DATA",
    usedFor: "Constants, Environment variables, Config",
    example: "const API_URL = 'https://api.com';"
  },
  kebab_case: {
    pattern: "first-name, get-user-data",
    usedFor: "CSS classes, HTML attributes, File names, URLs",
    note: "NOT valid for JavaScript identifiers"
  },
  Hungarian: {
    pattern: "strName, nCount, bActive",
    usedFor: "Legacy code, Type indication (less common now)",
    example: "var strName = 'John'; var nAge = 25;"
  }
};

console.log("=== JAVASCRIPT IDENTIFIER RULES & NAMING CASES ===");
console.log("\nNaming Conventions Summary:");
Object.keys(namingConventions).forEach((key, index) => {
  var convention = namingConventions[key];
  console.log(`\n${index + 1}. ${key}:`);
  console.log(`   Pattern: ${convention.pattern}`);
  console.log(`   Used for: ${convention.usedFor}`);
  if (convention.example) {
    console.log(`   Example: ${convention.example}`);
  }
  if (convention.note) {
    console.log(`   Note: ${convention.note}`);
  }
});
