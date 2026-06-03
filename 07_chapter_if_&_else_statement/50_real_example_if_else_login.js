//Here the condition is ture so it will go inside the if statement and check the condition.
// If the condition is flase then it will directly go inside the else.
let islogged = true;
let users_role = "Editor";

if (islogged) {
    if (users_role === "Admin") {
        console.log("welcome you are Admin you have full access");
    }
    else if (users_role === "Editor") {
        console.log("welcome you are Editor you can edit only");
    }
    else {
        console.log("welcome you are Guest");
    }
}
else {
    console.log("You Are invalid User");
}