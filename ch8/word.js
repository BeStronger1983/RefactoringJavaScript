// 物件字面值在簡單的情況中看起來非常棒，但一旦需要創建很多單字，相較於使用 new 搭配 class 或建構子函式，就會顯得很笨重
const word = {
    count() {
        return this.word.length;
    },
    lookUp() {
        return this.lookUpUrl + this.word;
    },
};

// 另一種替代方案：工廠函式
const englishWordFactory = (theWord) => {
    return Object.assign(Object.create(word), {
        word: theWord,
        language: "English",
        lookUpUrl: "https://en.wiktionary.org/wiki/",
    });
};

const japaneseWordFactory = (theWord) => {
    return Object.assign(Object.create(word), {
        word: theWord,
        language: "Japanese",
        lookUpUrl: "http://jisho.org/search/",
    });
};

const englishWord = englishWordFactory("dog");
const japaneseWord = japaneseWordFactory("犬");

console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(japaneseWord.lookUp());
console.log(englishWord.word);
console.log(englishWord.count());
console.log(englishWord.lookUp());

const wish = require("wish");
const deepEqual = require("deep-equal");

// 介面測試
wish(japaneseWord.word === "犬");
wish(japaneseWord.lookUp() === "http://jisho.org/search/犬");
wish(japaneseWord.count() === 1);

wish(englishWord.word === "dog");
wish(englishWord.lookUp() === "https://en.wiktionary.org/wiki/dog");
wish(englishWord.count() === 3);

// 內部測試
wish(typeof japaneseWord === "object");
// wish(typeof JapaneseWord === "function");
// wish(japaneseWord instanceof JapaneseWord);
// wish(japaneseWord instanceof Word);
// wish(!(JapaneseWord instanceof Word));

// 這個測試也過不了
// wish(japaneseWord.constructor === JapaneseWord);
// wish(Object.getPrototypeOf(JapaneseWord) === Word);
// console.log(Object.getPrototypeOf(JapaneseWord));

// 模糊點
// wish(deepEqual(Object.getPrototypeOf(japaneseWord), {}));
console.log(Object.getPrototypeOf(japaneseWord));
// 印出 { count: [Function: count], lookUp: [Function: lookUp] }
// japaneseWord 的原型改變了
