// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes--> it will tell that the character is mention in the string.
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));//this is not persent in the string so -1 will come.
console.log(url.indexOf("x"));// as x is not present so -1 will come

//
console.log(url.search(/login/));// so here login l start from 28 position so 
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 