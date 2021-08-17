const {sum, div, factorial, sumOfOdd, sayHello} = require('./helpers')
const uniqid = require('uniqid');


console.log(uniqid());

console.log(sum(2, 6));
console.log(div(12, 6));
console.log(factorial(4));
console.log(sumOfOdd(15));
console.log(sayHello())