var a = 10;//global scope.
console.log(a);
function will() {
    console.log("Hi from function");
    var a = 20;//local scope.
    console.log(a);
    if (true) {
        var a = 40;
        console.log(a);
    }
    console.log("f-->", a);//here it will print 40 because of var scope.
}
console.log("g-->", a);//here it will print 10 because of global.
will();
