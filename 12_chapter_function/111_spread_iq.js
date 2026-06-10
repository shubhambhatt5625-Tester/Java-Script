function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
let sum = add(...num);
console.log(sum);