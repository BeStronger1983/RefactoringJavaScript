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
