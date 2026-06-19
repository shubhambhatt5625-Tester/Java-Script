//let s = [1, 2, 3, 4, 5];
//console.log(s);
// this is simple or normal array.

// In 2d or multi we have row and coloum.


let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// here 1,2,3 is consider as row and 1,4,7 is consider as coloum or cell. 
// to print them we will be using for loop.
/// i is the inner loop which will run for row.
// j is the outer loop which will run for cell.
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(grid[i][j]);
        //This will print 1 through 9 in order. grid[i][j] accesses row i, column j.
    }
    console.log("\n");// it will create the space between the row.

}
console.log(grid);
