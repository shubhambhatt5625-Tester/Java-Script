const numbers = [1, 2, 3];
numbers.map(function (num) { // callback executed immediately
    console.log(num * 2);
});

function orderfood(item, callback) {
    console.log("Order placed-" + item);
    callback();
}

orderfood("Burger", function () {
    console.log("By Anonymous your order is ready");
});
//This example is a synchronous callback because it executes immediately. In a real scenario, preparing food takes time. 