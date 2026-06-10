function outer() {
    let message = "hello";
    console.log("Outer CALLED!");

    function inner() {
        console.log(message);
    }
    inner();
    //return inner;
}


//let inn = outer();
//inn();
outer();