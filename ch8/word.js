// 物件很多時會變得很繁瑣，可以這樣採用工廠函式
const wordFactory = function () {
    return {
        count() {
            return this.word.length;
        },
        lookUp() {
            return this.lookUpUrl + this.word;
        },
    };
};

const englishWordFactory = (theWord) => {
    let copy = Object.assign(wordFactory(), {
        word: theWord,
        language: "English",
        lookUpUrl: "https://en.wiktionary.org/wiki/",
    });

    return Object.setPrototypeOf(copy, wordFactory);
};

const japaneseWordFactory = (theWord) => {
    let copy = Object.assign(wordFactory(), {
        word: theWord,
        language: "Japanese",
        lookUpUrl: "http://jisho.org/search/",
    });

    return Object.setPrototypeOf(copy, wordFactory);
};

const englishWord = englishWordFactory("dog");
const japaneseWord = japaneseWordFactory("犬");

wordFactory.reportLanguage = function () {
    return `The Language is ${this.language}`;
};

console.log(japaneseWord.reportLanguage());
console.log(englishWord.reportLanguage());

// word 並不一定需要工廠函式，但這避免了為它建造原型這個步驟，雖然在一個 language 工廠函式中手動設定原型看起來很麻煩
// 但如果有太多物件，手動的為每一個 word 實例設定原型只會更糟

console.log(Object.getPrototypeOf(englishWord));
console.log(Object.getPrototypeOf(japaneseWord));

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
// console.log(Object.getPrototypeOf(japaneseWord));
// 印出 { count: [Function: count], lookUp: [Function: lookUp] }
// japaneseWord 的原型改變了
