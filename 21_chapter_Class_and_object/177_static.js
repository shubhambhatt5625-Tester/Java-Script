class Student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static class_name1 = "Playwright2x";
    static mentor_name = "PrrammodDutta";

}

const s1 = new Student("Yasho", 32, "9876543210");
const s2 = new Student("Sharad", 30, "8210910909");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.class_name1);
console.log(Student.mentor_name);
/*The console.log inside the constructor fires for every new Browser() call. Student has no such console.log, so it only prints when you explicitly call console.log(s1).*/

/*The constructor runs automatically when you create an object with new. It's where you initialize the object's properties.
constructor(name_student, age, phoneNo) {
    this.name_student = name_student; // stores value in THIS specific object
    this.age = age;
    this.phoneNo = phoneNo;
}
Why here?
- this refers to the individual instance (s1, s2). Putting values here ensures each object gets its own copy of data.
- Without constructor, s1 and s2 would have no data — they'd be empty objects.
Example:
const s1 = new Student("Yasho", 32, "9876543210"); // s1 gets Yasho's data
const s2 = new Student("Sharad", 30, "8210910909"); // s2 gets Sharad's data
Each call to new runs the constructor separately, so this points to a different object each time. That's why s1.age is 32 and s2.age is 30 — they are independent.*/