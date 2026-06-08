let arr = [1, 2, 3, 4, 5, 6]
console.log(arr);

//splice syntax [start,delete,item to add]
//current arr     [1,2,3,4,5,6]
// index of array [0,1,2,3,4,5]
//arr.splice(2, 1);
// on indexing 2 remove one element
//console.log(arr);

//arr.splice(2, 0, 99);
// on indexing 2 add one element as 0 means that we do not want to delete the any element
//console.log(arr);

//arr.splice(2, 1, 99);
// on indexing 2 remove one element and add one element. this is also know as replacing
//console.log(arr);

arr.splice(1, 2, 10, 20);
// on indexing 1 it will remove two element (2,3) and will add two elements (10 and 20)
console.log(arr);