// 引用透明與避免狀態
x = 5;

// 這可以是
function five() {
    return 5;
}

five();

// 或者可以直接呼叫
(() => 5)();

// 或者回傳我們傳入的
((x) => x)(5);

// 可以為在做計算的函式進行類似轉換，例如
x = 3 + 5;

// 可以轉為
(() => 3)() + (() => 5)();

// 如果都回傳傳入值
((x) => x)(3) + ((y) => y)(5);

// 合併表達式
((x, y) => x + y)(3, 5);

// 賦值
const result = ((x, y) => x + y)(3, 5); // result 可以用 8 取代

// 以上是引用透明的例子

// 什麼參數會改變呢？例如這個情境
const recentLogins = ((x, y) => x + y)(db.loginsToday, db.loginsYesterday);

// 不需要把資料庫當作存放大量變數的地方
const today = 20210929;
const yesterday = 20210928;
const recentLogins = ((x, y) => x + y)(db.logins(today), db.logins(yesterday));
