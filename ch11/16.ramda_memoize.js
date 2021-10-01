// 於 Ramda 再遇記憶化
const R = require("ramda");

// Ramda 可以這樣做出記憶化函式
var factorial = R.memoizeWith(R.identity, (n) => R.product(R.range(1, n + 1)));

const n = 21;
console.log(factorial(n));
console.log(factorial(n));
console.log(factorial(n));

// pipe 是另一個你不時會看到的函式
var printFact = R.compose(console.log, factorial);
printFact(3);

// 等同
var printFactPipe = R.pipe(factorial, console.log);
printFactPipe(3);
