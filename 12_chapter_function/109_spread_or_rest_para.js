function login(suitname, ...results)//(...)===spread will always come in end.
{
    console.log(suitname);
    console.log(...results);
}
login("login test", 1, 2, 3);
//login("Hello", "shubham");