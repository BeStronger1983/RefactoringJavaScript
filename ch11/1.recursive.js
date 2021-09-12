// 用迴圈尋找一個元素
function find(toFind, array) {
    let found = "not found";
    array.forEach((element) => {
        if (element == toFind) {
            found = "found";
        }
    });
    return found;
}

console.log(find(3, [3, 9, 2]));
console.log(find(3, [2, 9, 3]));
console.log(find(3, [2, 9, 2]));

// 遞迴版本
function find(toFind, array) {
    if (array[0] === toFind) {
        return "found";
    } else if (array.length === 0) {
        return "not found";
    } else {
        return find(toFind, array.slice(1));
    }
}

console.log(find(3, [3, 9, 2]));
console.log(find(3, [2, 9, 3]));
console.log(find(3, [2, 9, 2]));
