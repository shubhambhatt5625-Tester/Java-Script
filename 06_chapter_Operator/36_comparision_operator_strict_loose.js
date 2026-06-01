// strict is ====
// loose is ==

//== comparison operator (loose comparison) it only check value not data types.
//=== comparison operator (strict comparison) it check both values and data types.
//number = string
console.log(30 == "30"); // true because it check only value not data types.
console.log(30 === "30"); // false because it check both value and data types.
//string = number
console.log("30" == 30); // true
console.log("30" === 30); // false

console.log("30" === 33); // answer will be because value is different here -->false

console.log(30 === 30); // answer will be true because value is same here -->true
console.log("30" === 30); // because data types are different here-->false

console.log("30" == 30); // true
console.log(30 == 30); // true

console.log(0 == ""); // here "" is converted to zero --> true
console.log(0 === ""); // here value is different--> false

console.log(1 == true); // here true is converted to one --> true
console.log("1" == true) // true because "1" is converted to one --> true
console.log(2 == true);// true because in java script any thing other then zero is
//  considered as true --> true
console.log(1 === true); // here value is different--> false

console.log(0 == false); // here false is converted to zero --> true
console.log(0 === false); // here value is different--> false

//zero is always consider as false in any case but rest are consider true

console.log(5 != 5);//false
console.log(5 != '5');//false because it checks value not data types.
console.log(5 != "5"); //false

console.log(1 != true);//false
console.log(0 != false);//false

console.log(5 != 4);//true
console.log(5 != 6);//true
console.log("5" != 5);//false
console.log(null != undefined);//true
console.log(null != null);//false
