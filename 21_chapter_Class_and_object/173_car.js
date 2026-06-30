class car {
    //parametrize constructor
    constructor(carname) {
        this.name = carname;
    }
    //attribute

    //behaviour
    drive() {
        console.log("I Drive " + this.name + " Car");
    }
}

let brand = new car("baleno");
brand.drive();

