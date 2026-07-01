class animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " Is Eating");
    }
    sleep() {
        console.log(this.name + " Is Sleeping");
    }
}

class dog extends animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.breed + " Is Barking");
    }
}

const call = new dog("Rex", "Lebrador")
call.eat();
call.sleep();
call.bark();
console.log(dog.name);
console.log(dog.breed);