const arr = [1,2,20,4,5,9];
const number = [20,4,1,2,5]
const compare = arr.every(num => number.includes(num));
console.log(compare)