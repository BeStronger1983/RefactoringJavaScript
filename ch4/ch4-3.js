// 未測試的程式碼加上描述測試
var s = ["H", "D", "S", "C"];
var v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var rS = function () {
    return s[Math.floor(Math.random() * s.length)];
};

var rV = function () {
    return v[Math.floor(Math.random() * v.length)];
};

var rC = function () {
    return rV() + "-" + rS();
};

var doIt = function () {
    var c = [];
    c.push(rC());
    c.push(rC());
    c.push(rC());
    c.push(rC());
    c.push(rC());
    return c;
};

console.log(doIt());

const wish = require("wish");

describe("doIt()", function () {
    it("返回某個長度為 5 的東西", function () {
        wish(doIt().length === 5);
    });
});

describe("rC()", function () {
    it("返回值符合卡片", function () {
        wish(rC().match(/\w{1,2}-[HDSC]/));
    });
});

describe("rV()", function () {
    it("返回值符合卡片", function () {
        wish(rV().match(/\w{1,2}/));
    });
});

describe("rS()", function () {
    it("返回值符合花色", function () {
        wish(rS().match(/[HDSC]/));
    });
});
