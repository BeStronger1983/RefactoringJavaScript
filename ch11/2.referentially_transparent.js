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
