// 使用 Ramda
R = require("ramda");

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

const curriedAdd = R.curry(add);

console.log(curriedAdd(1)); // [Function (anonymous)]
console.log(curriedAdd(1)(2)); // 3，跟手動柯里化的結果一樣
console.log(curriedAdd(1, 2)); // 3

// 使用 Ramda 的額外好處是，使用 (1, 2) 作為參數依然能得到 3。

// 以下也同樣運作正常
const increment = curriedAdd(1);
console.log(increment(3));

// map 沒有這麼了不起

// 這看起來還可以
const square = (thing) => thing * thing;
console.log([2, 4, 5].map(square));

// 但如果想重用 mapSquare 函式呢？

// 可以讓 Ramda 讓我們做些事
// Ramda 的 map 函式原本就被柯里化，所以我們可以部分應用 square 來產生 mapSquares，再接收資料。
const mapSquares = R.map(square);
console.log(mapSquares([2, 4, 5]));

// 但如果有需要，它也能夠一次接收兩個參數。
console.log(R.map(square, [2, 4, 5]));
