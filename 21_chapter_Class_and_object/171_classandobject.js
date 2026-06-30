class Person {
    //attributes
    name;
    emails;
    salary;
    address;

    //behaviour
    sleep() {
        console.log("Let me sleep");
    }
    eat() {
        console.log("I want to eat maggie");
    }
    walk() {
        console.log("Let's Go for a walk");
    }
}
let obj = new Person();
console.log(obj.sleep());
obj.sleep()
/*Imagine you ask your friend: "Go eat food and tell me what you brought back."
Your friend:
1. Goes and eats food (prints "Let me sleep")
2. Comes back with nothing in their hands (because you didn't ask them to bring anything)
Then you shout: "Look what my friend brought!" and show everyone... nothing (prints undefined).
So console.log(obj.sleep()) means:
- "Do the thing" → Let me sleep
- "Show me what it brought back" → undefined (because it brought nothing back)
Fix: Just say obj.sleep() — ask your friend to do the thing, don't ask what they brought back.*/

