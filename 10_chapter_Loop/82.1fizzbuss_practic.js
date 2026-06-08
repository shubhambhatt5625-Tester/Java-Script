/*answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.*/

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + "-Number is FizzBuzz");
    }
    else if (i % 5 === 0) {
        console.log(i + "-Number is Buzz");
    }
    else if (i % 3 === 0) {
        console.log(i + "-Number is Fizz");
    }
    else {
        console.log(i + "-Number is not a FizzBuzz");
    }
}