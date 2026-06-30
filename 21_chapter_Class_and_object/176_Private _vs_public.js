//private are created by # and is accessable inside the class.
//public can be access outside the class.
class Credentials {
    #apiKey; // Private variables are not allowed to be used outside. 
    user;    //public 
    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey);  undefined
// console.log(cred.#apiKey); error
//console.log(key);           ReferenceError: key is not defined


const token = cred.pramodgetAuthHeader();// due to return type we have to assing it to token.
console.log(token);
console.log("another print");
console.log(cred.pramodgetAuthHeader());
