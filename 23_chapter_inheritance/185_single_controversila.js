class basetest {
    setup() {
        console.log("Base will be called");
    }
}
class apitest extends basetest {
    setup() {
        console.log("Api will be called");
    }
}
let test = new apitest();// whoes object is present it will be called.
test.setup();