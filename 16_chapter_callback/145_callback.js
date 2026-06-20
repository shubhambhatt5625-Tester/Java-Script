function waiter(Ordergiven, callmewhenmyorderisready) {
    console.log("Finding Table For U");
    console.log("Table Found");
    console.log("Your Order is Ready " + Ordergiven + "-Table No 2 sir");
    callmewhenmyorderisready();
}

waiter(["Burger", "Pizza", "coke"], function () {
    console.log("Here is My No.");
}
)
//when we are passing multiple arguments so there are
//two ways first console.log("Your Order is Ready " + orders.join(", ") + " -Table No 2 sir");
//second wrap them in an array:
//waiter(["Burger", "Pizza", "coke"]