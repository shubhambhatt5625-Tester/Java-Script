//backtick-- it is use in template literal as it gives the proper formatted output in dynamic 
let name = "Ritesh";
let age = 22;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

//normal string
let message2 = "My name is " + name + " and I am " + age + " years old.";
console.log(message2);

//formatted string using backtick
let formatted = `Name: ${name} Age: ${age}`;
console.log(formatted);
/*
$        -> Dollar sign        -> Part of the interpolation syntax trigger
{ }      -> Curly braces       -> Wrap the expression to be evaluated
${...}   -> Together           -> Tells JS: evaluate what's inside and embed the result
name -> Identifier/variable -> The value that gets inserted.
age -> Identifier/variable -> The value that gets inserted.

// Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);


const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });


const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);*/