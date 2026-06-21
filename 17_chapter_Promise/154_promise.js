// it is a callback with condition

let orderfood = new Promise(function (resolve, reject) {
    let food = true;
    if (food) {
        resolve("Pizza is ready");
    }
    else {
        reject("Order rejected");
    }
})
console.log(orderfood);