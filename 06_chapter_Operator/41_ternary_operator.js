// sytanx condition ? expressionIfTrue : expressionIfFalse;
let age = 20;
let beverage = (age >= 21) ? "Beer" : "Juice"; //  condition ? expressionIfTrue : expressionIfFalse;
console.log(beverage); // Output: Juice // if age is 21 then it will print Beer else Juice

/*In this example, if age is greater than or equal to 21,
 the result will be "Beer"; otherwise, it will be "Juice".*/

/// real example of api testing.
let status_code = 200;
let expected_code = 200;
let result = (status_code === expected_code) ? "Pass" : "Fail";//200===200-->condition
console.log(result); // Output: Pass

// another example is.
let username = "admin";
let password = "[PASSWORD]";
let login = (username === "admin" && password === "[PASSWORD]") ? "Login Success" : "Login Failed";
console.log(login); // Output: Login Success
// another example is. -->false here it will take else
let enviroment = "staging";
// here it will false because staging is not equal to prod.
let base_url = (enviroment === "prod") ? "https://prod.api.com" : "https://staging.api.com";
console.log(base_url);

let you = true;
// headless = true and headed = false.
let check = you ? "headless" : "headed";
console.log("Run the browser in :-" + check + "mode");

// another example is
let sla_reached_out = 850;
let sla = 1000;
let check_sla_status = sla_reached_out <= sla ? "SLA is Reached" : "SLA is Not Reached";
console.log("Current Status = " + check_sla_status); // Current Status = SLA is Reached.

// same as above condition false here it will take else.
let sla_reached_out1 = 1100;
let sla1 = 1000;
let check_sla_status1 = sla_reached_out1 <= sla1 ? "SLA is Reached" : "SLA is Not Reached";
console.log("Current Status = " + check_sla_status1); // Current Status = SLA is Not Reached.

