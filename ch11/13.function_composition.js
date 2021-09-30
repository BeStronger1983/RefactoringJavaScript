// 函式組合
// 試試 lodash
const _ = require("lodash");

const square = (thing) => thing * thing;

const mapSquares = _.map(square);
// console.log(mapSquares([2, 3, 5])); // TypeError: mapSquares is not a function
console.log(_.map(square, [2, 4, 5])); // []

// 我們仍然可以這麼做
console.log(_.map([2, 4, 5], square));
// 工作良好，但繞了一圈回來
// 這就是傳統的做法，而且這種將資料置於 callback 之前的做法會阻礙函式的組合。
// 我們能這樣修正
function mapSquares2(data) {
    return _.map(data, function (toSquare) {
        return toSquare * toSquare;
    });
}

console.log(mapSquares2([2, 4, 5]));

// 當然，我們能重構為
function mapSquares3(data) {
    return _.map(data, square);
}

// 或是
const mapSquares4 = (data) => _.map(data, square);

// 但我們之前可以這樣解決
R = require("ramda");
const mapSquares5 = R.map(square);
