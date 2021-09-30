// 新增功能
const R = require("ramda");

console.log("如果想把所有東西都變成四次方，我們可能會複雜化程式呼叫");
const square = (thing) => thing * thing;
console.log(R.map(square, R.map(square, [2, 4, 5])));

function fourthPower(thing) {
    return square(thing) * square(thing);
}

console.log("或是");
console.log(R.map(fourthPower, [2, 4, 5]));

console.log("但 Ramda 有個祕技叫 compose");
const fourthPower2 = R.compose(square, square);
console.log(R.map(fourthPower2, [2, 4, 5]));

console.log("然後我們能把 map 與新做出來的 mapFourthPower 組合起來");
const mapFourthPower = R.map(fourthPower2);
console.log(mapFourthPower([2, 4, 5]));

console.log("也能把 console.log 也組合起來(如果我們想要印出元素而非陣列)");
const printFourthPower = R.compose(console.log, square, square);
R.map(printFourthPower, [2, 4, 5]);

console.log("因為 map 是柯里化的，所以這樣也行");
R.map(printFourthPower)([2, 4, 5]);

// 雖然可以用 compose 和 map 串出我們要的功能，但除錯會很困難。
