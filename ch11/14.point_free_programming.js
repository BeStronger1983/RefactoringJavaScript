// 無參數風格程式設計

// 這個 mapSquare 並不符合無參數風格
const square = (thing) => thing * thing;
const mapSquare = (data) => _.map(data, square);

// 這個符合
R = require("ramda");
const mapSquare2 = R.map(square);

// 很難讓所有函式都無參數，但這個企圖能讓你縮短很多函式定義

// 稍早我們有這一小段程式
[3, 4, 2].forEach((element) => console.log(element));

// 似乎我們能這樣做
[3, 4, 2].forEach(console.log);
// 雖然只想印出數字，但最後會印出三行，每行會印出數字、索引、整個陣列
// 因為 forEach 會提供三個參數給 callback
// console.log 則會把所有參數都印出

// 製造一個只使用第一個參數的的打印函式
const logFirst = (first) => console.log(first);
[3, 4, 2].forEach(logFirst);
