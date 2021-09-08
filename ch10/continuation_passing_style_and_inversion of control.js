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
