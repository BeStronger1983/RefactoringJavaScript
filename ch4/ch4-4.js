// 除錯與回歸測試
var suits = ["H", "D", "S", "C"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var randomSuit = function () {
    return suits[Math.floor(Math.random() * suits.length)];
};

var randomValue = function () {
    return values[Math.floor(Math.random() * values.length)];
};

var randomCard = function () {
    return randomValue() + "-" + randomSuit();
};

var buildCardArray = function () {
    var tempArray = [];
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            tempArray.push(values[i] + "-" + suits[j]);
        }
    }
    return tempArray;
};

var randomHand = function () {
    var cards = [];
    var cardArray = buildCardArray();
    cards.push(
        cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]
    );
    cards.push(
        cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]
    );
    cards.push(
        cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]
    );
    cards.push(
        cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]
    );
    cards.push(
        cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]
    );
    return cards;
};

console.log(randomHand());

const deepEqual = require("deep-equal");
const wish = require("wish");

describe("randomHand()", function () {
    it("返回五個 randomCards", function () {
        wish(randomHand().length === 5);
    });

    // 重現玩家拿到相同卡片的問題
    for (var i = 0; i < 100; i++) {
        it("不該讓頭兩張卡相同", function () {
            var result = randomHand();
            wish(result[0] !== result[1]);
        });
    }
});

describe("randomCard()", function () {
    it("返回值符合卡片", function () {
        wish(randomCard().match(/\w{1,2}-[HDSC]/));
    });
});

describe("randomValue()", function () {
    it("返回值符合卡片", function () {
        wish(randomValue().match(/\w{1,2}/));
    });
});

describe("randomSuit()", function () {
    it("返回值符合花色", function () {
        wish(randomSuit().match(/[HDSC]/));
    });
});

describe("buildCardArray()", function () {
    it("返回完整的牌堆", function () {
        wish(buildCardArray().length === 52);
    });

    it("給出一個卡片的陣列", function () {
        wish(
            deepEqual(buildCardArray(), [
                "1-H",
                "1-D",
                "1-S",
                "1-C",
                "2-H",
                "2-D",
                "2-S",
                "2-C",
                "3-H",
                "3-D",
                "3-S",
                "3-C",
                "4-H",
                "4-D",
                "4-S",
                "4-C",
                "5-H",
                "5-D",
                "5-S",
                "5-C",
                "6-H",
                "6-D",
                "6-S",
                "6-C",
                "7-H",
                "7-D",
                "7-S",
                "7-C",
                "8-H",
                "8-D",
                "8-S",
                "8-C",
                "9-H",
                "9-D",
                "9-S",
                "9-C",
                "10-H",
                "10-D",
                "10-S",
                "10-C",
                "J-H",
                "J-D",
                "J-S",
                "J-C",
                "Q-H",
                "Q-D",
                "Q-S",
                "Q-C",
                "K-H",
                "K-D",
                "K-S",
                "K-C",
            ])
        );
    });
});
