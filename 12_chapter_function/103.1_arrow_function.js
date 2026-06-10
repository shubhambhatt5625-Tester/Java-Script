//normal

function add(a, b) {
    return a + b;
}
let sum = add(4, 9);
console.log(sum);

//arrow 
const add2 = (a, b) => a + b;
let sum2 = add2(6, 5);
console.log(sum2);


function say() {
    console.log("hi shubham");
}
say();

const say1 = () => "hi shubham arrow";
let s = say1();
console.log(s);

const say2 = () => console.log("hi shubham arrow1");
say2();