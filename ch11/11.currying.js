// 柯里化
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

add(1, 2);

// 有些入(FP 流氓們)想讓你相信這樣做更棒
function add(numberOne, numberTwo) {
    return function (numberTwo) {
        return numberOne + numberTwo;
    };
}

console.log(add(1, 2)); // [Function (anonymous)]

// 仍然可以這樣使用 add
console.log(add(1)(2));
