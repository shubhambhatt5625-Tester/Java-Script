let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
]
let rowssums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowssums);
