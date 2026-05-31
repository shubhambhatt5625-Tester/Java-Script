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
