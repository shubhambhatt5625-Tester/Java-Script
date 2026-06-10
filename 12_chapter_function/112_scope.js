// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global
    console.log(timeout); // ✅ can access local
}


setupConfig();// when every it is return type we have assign the value. as print cmd is not given in return type
console.log(env);
//console.log(timeout);// cannot access as block scope is their