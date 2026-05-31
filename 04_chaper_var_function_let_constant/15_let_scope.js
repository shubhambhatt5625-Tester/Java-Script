let a = 10;//global scope.
console.log(a);
function will() {
    console.log("Hi from function");
    let a = 20;//local scope.
    console.log(a);
    if (true) {
        let a = 40;
        console.log(a);
    }
    console.log("f-->", a);//here it will print 40 because of block scope. due to{}
}
//let is block scope that why we do not use var
console.log("g-->", a);//here it will print 10 because of global.
will()