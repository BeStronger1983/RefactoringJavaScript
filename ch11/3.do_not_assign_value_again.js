// 重新賦值
let x = 1;
x = x + 1;

// 避免重新賦值
const y = 2;

// 在條件測試中重新賦值
function func(x) {
    if (x >= 2) {
        x = x + 7;
    }

    return x;
}

// 在條件測試中避免重新賦值
function func2(x) {
    if (x >= 2) {
        return x + 7;
    } else {
        return x;
    }
}

// 或
function func3(x) {
    return x >= 2 ? x + 7 : x;
}

// 條件內部的重複賦值
function func4(x) {
    if ((x = x + 7) >= 9) {
        return x;
    } else {
        return x;
    }
}

// 先讓所有變數都不被改動
function func5(x) {
    if (x + 7 >= 9) {
        return x + 7;
    } else {
        return x + 7;
    }
}

// 可以寫成
function fun6(x) {
    return x + 7;
}
