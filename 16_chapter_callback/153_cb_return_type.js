function calculate(a, b, callbackaddition) {
    console.log("callback return");
    return callbackaddition(a, b);
}
let sum = calculate(4, 5, function (a, b) {
    return a + b;
})
console.log(sum);