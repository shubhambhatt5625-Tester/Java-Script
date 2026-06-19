let testmatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 200],
    ["search", "pass", 200]
]
for (let i = 0; i < testmatrix.length; i++) {
    for (let j = 0; j < testmatrix[i].length; j++) {
        console.log(testmatrix[i][j]);
    }
}