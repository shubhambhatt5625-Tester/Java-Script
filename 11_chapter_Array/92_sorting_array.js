// string sorting
let fruits = ["banana", "apple", "dom", "cherry"];
fruits.sort();
console.log(fruits);


//Number sorting, it is also know as natural or lexicography sorting.
// by default the no are sorted in lexical way
// it is 

let num = [2, 1, 8, 4];
num.sort();
console.log(num);

// it is based of the first no.
let num1 = [20, 2, 1, 4, 10];
num1.sort((a, b) => a - b);
console.log(num1);

// noraml sorting
//in normal soring we will use arrow function 
// this also know as ascending order of no
let num2 = [20, 2, 1, 4, 10];
num2.sort((a, b) => a - b);
console.log(num2);

// for descending order we have to change the a+b.