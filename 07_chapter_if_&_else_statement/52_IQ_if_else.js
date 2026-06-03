//
if ("hello") console.log("Is String Truely");
if (42) console.log("Is Number Truely");// after 1 any no will be true
if ({}) console.log("Is Curely Braces Truely");
if ([]) console.log("Is Array Truely");

// These all will not print because they are false.
if ("") console.log("Would NOt Print");
if (0) console.log("Is 0 False");// 0 will always be false
if (null) console.log("Is null false");
if (undefined) console.log("Is undefine false");
if (NaN) console.log("Is NaN False");

let name1 = undefined;// here undefined is false  
if (name1) {
    console.log("Hi");
}
else {
    console.log("Bye");
}