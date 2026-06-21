function gettocken() {
    return Promise.resolve("Pass As API is 200")
}
async function results() {
    let checktocken = await gettocken();
    console.log(checktocken);
}
results();

/*Alternative without async — use .then():
function results() {
  gettocken().then(checktocken => console.log(checktocken));
}*/
