// 一個不需要額外兩個類別的例子
function log(fun, number) {
    console.log(fun(number));
}

function whatIsBinary(number) {
    return Number("0b" + number);
}

function whatIs(number) {
    return number;
}

[whatIsBinary, whatIs].forEach((fun) => {
    log(fun, 10);
});

// 在實際應用中，我們比較偏好使用 Person 物件，此時相較於只使用函式，使用類別或物件通常較為妥當。
