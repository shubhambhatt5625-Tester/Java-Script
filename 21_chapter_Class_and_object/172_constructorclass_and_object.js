class Person {
  constructor() {
    console.log("It will run automatically");// default
  }
  name;
  emails;
  salary;
  address;


  sleep() {

  }
  eat() {

  }
  walk() {

  }
}

let obj = new Person() //new keywork is use make object or object created with new key word.
console.log(obj);
//output
/*It will run automatically
Person {
  name: undefined,
  emails: undefined,
  salary: undefined,
  address: undefined
}*/