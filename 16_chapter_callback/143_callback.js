function print() {
    console.log("By Normal Function-->Your Order is ready");
}
function orderfood(item, callback) {
    console.log("Order placed-" + item);
    callback();
}
// first way
// here we have declare the function seperatly.

orderfood("burger", print);

//second way is declaring the function inside when we are call a function and it is called anonymous function.
//here function is without name.

orderfood("Burger", function () {
    console.log("By Anonymous your order is ready");
});

//Third way 
// by using arrow function

orderfood("Burger", () => {
    console.log("By Arrow your order is ready");
});