// 用遞迴函式階乘來探討引用透明
function factorial(number) {
    if (number < 2) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(3));

// 由於 factorial 是個純函式，所以有個記憶化它的機會
const lookUpTable = {};

function memoizedFactorial(number) {
    if (number in lookUpTable) {
        console.log("快取");
        return lookUpTable[number];
    } else {
        console.log("計算");
        var reduceValue;
        if (number < 2) {
            reduceValue = 1;
        } else {
            reduceValue = number * memoizedFactorial(number - 1);
        }
        lookUpTable[number] = reduceValue;
        return reduceValue;
    }
}

console.log(memoizedFactorial(10)); // 計算十次
console.log(memoizedFactorial(10)); // 快取一次
console.log(memoizedFactorial(11)); // 計算一次並快取

// 函式依賴非顯示參數，變為非純函式。修改 lookUpTable 為顯式參數
function memoizedFactorial(number, lookUpTable = {}) {
    if (number in lookUpTable) {
        console.log("快取");
        return lookUpTable[number];
    } else {
        console.log("計算");
        var reduceValue;
        if (number < 2) {
            reduceValue = 1;
        } else {
            reduceValue = number * memoizedFactorial(number - 1, lookUpTable)["result"];
        }
        lookUpTable[number] = reduceValue;
        return { result: reduceValue, lookUpTable: lookUpTable };
    }
}

console.log(memoizedFactorial(10)["result"]);
console.log(memoizedFactorial(10)["result"]); // 沒有取到快取

const resultAndLookup = memoizedFactorial(10);
console.log(resultAndLookup.result);
console.log(memoizedFactorial(10, resultAndLookup.lookUpTable)); // 有取到快取
