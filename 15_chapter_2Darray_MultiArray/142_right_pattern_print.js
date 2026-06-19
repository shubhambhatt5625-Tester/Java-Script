let pattern = 3
//i will be printing the row.
//j will be printing the coloum.
for (let i = 0; i < 3; i++) {
    let right_pattern = " ";
    for (let j = 0; j <= i; j++) {
        right_pattern += "*";
    }
    console.log(right_pattern);
}
/*- j <= i: when i=0, j goes 0 → 1 star. When i=1, j goes 0,1 → 2 stars. When i=2, j goes 0,1,2 → 3 stars.
- j < i: when i=0, j starts at 0 but 0 < 0 is false → 0 stars. When i=1, j goes 0 → 1 star. When i=2, j goes 0,1 → 2 stars.
Each row in loop 2 has exactly one fewer star because the loop stops one iteration earlier.*/