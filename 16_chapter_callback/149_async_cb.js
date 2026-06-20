function orderFood(item, callback) {
    console.log("Order placed: " + item);

    // Simulate 2 seconds of cooking time
    setTimeout(function () {
        callback();
    }, 2000);
}
orderFood("Burger", function () {
    console.log("By Anonymous, your order is ready!");
});

console.log("Waiting for food..."); // Prints immediately, doesn't wait