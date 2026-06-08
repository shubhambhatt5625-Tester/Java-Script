let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3));
// it will start from 1 index and will finish on 3 index.

// if we does not give the end it will from start to end. 
console.log(arr.slice(1));

//if we give -2 then it will start from end.and will give the last element of of the array.

console.log(arr.slice(-2));