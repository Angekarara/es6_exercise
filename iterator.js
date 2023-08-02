const digits = [1,2,3,4,5,6]
const iterate = digits[Symbol.iterator]();

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())