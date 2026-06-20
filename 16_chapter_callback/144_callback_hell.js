function orderFood(item, callback) {
    console.log("Order placed: " + item);
    setTimeout(callback, 1000);
}

function prepareFood(callback) {
    console.log("Preparing food...");
    setTimeout(callback, 2000);
}

function deliverFood(callback) {
    console.log("Delivering food...");
    setTimeout(callback, 1000);
}

// Chaining them together (nested callbacks)
orderFood("Burger", function () {
    prepareFood(function () {
        deliverFood(function () {
            console.log("By Anonymous, your order is ready! Enjoy.");
        });
    });
});