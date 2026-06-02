//Nested Ternary Operators
// You can nest ternary operators to handle multiple conditions,
//  but this can make the code hard to read. So use if else.
let age = 18;
let can_vote = age >= 18 ? "you can vote" : "you can not vote"
console.log(can_vote);

let shubham_age = 25;
let checkifhecandrink = shubham_age >= 18 ? (shubham_age >= 25 ? "he can drink" : "he can not drink") : "can not go";
console.log(checkifhecandrink);

let percentage = 40;
let percentagecount = percentage >= 40 ? (percentage >= 60 ? (percentage >= 70 ? "excellent" : "good") : "average") : "fail";
console.log(percentagecount);

let marks = 85;
let result = (marks < 40) ? "Fail"
  : (marks < 60) ? "Pass"
    : (marks < 80) ? "Good" : "Excellent";
console.log(result); // Output: Excellent
/*let marks = 85;

let result = (marks < 40) ? "Fail" :        // if marks < 40 → "Fail"
             (marks < 60) ? "Pass" :        // else if marks < 60 → "Pass"
             (marks < 80) ? "Good" :        // else if marks < 80 → "Good"
             "Excellent";                   // else → "Excellent"

console.log(result); // Output: Excellent

? : is the ternary operator (short form of if...else).

It evaluates conditions in order:

If marks < 40 → "Fail"-->less than

Else if marks < 60 → "Pass"-->less than
-->less than
Else if marks < 80 → "Good"-->less than

Else → "Excellent"

Since marks = 85, none of the first three conditions are true,
so it falls to the last case → "Excellent".
*/

/*
let marks = 85;
let result;

if (marks < 40) 
{
  result = "Fail";
} 
  else if (marks < 60)
{
  result = "Pass";
} 
  else if (marks < 80) 
{
  result = "Good";
} 
  else 
{
  result = "Excellent";
}

console.log(result); // Output: Excellent
*/