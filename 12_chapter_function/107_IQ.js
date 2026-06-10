function get(name, status, percentage) {
    return `student--> ${name}, ${status}, ${percentage}`
}
get("shubham", "pass", 75);// if will run but no output will come because we have no print the value. 

//so to print first we will assign it.

let print = get("shubham", "pass", 75);
console.log(print);

function greet(name) {
    return name;
}
let d = greet("shubham");
console.log(d);