// 直接風格的版本
function addOne(addend) {
    console.log(addend + 1);
}

addOne(2);

// 等價的 callback 版本
function two(callback) {
    callback(2);
}

two((addend) => console.log(addend + 1));

// 提取並命名匿名函式
function two(callback) {
    callback(2);
}

function addOne(addend) {
    console.log(addend + 1);
}

two(addOne);

// 異步運行 three 函式
function three(callback) {
    setTimeout(function () {
        callback(3);
    }, 500);
}

three(addOne);

// 試著寫出同步版本
function three() {
    setTimeout(function () {
        return 3;
    }, 500);
}

addOne(three()); // NaN
