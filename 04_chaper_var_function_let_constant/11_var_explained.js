var a = 10;//global scope.
console.log(a);
function will() {
    console.log("Hi from function");
    var a = 20;//local scope.
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
}
will();
var a = 40;
console.log(a);//var can be declare multiple time.

