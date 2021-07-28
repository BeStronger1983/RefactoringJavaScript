// 物件字面值
const word = {
    count() {
        return this.word.length;
    },
    lookUp() {
        return this.lookUpUrl + this.word;
    },
};

// 改用 Object.assign 來結合物件，而非逐一更新
// 修改變數的值容易造成問題，所以這個方法比較好
// 第一個參數不用 word 的原因是 Object.assign 的第一個參數是目標物件
// 所以寫 word 會破壞本源
const englishWord = Object.assign(Object.create(word), {
    word: "dog",
    language: "English",
    lookUpUrl: "https://en.wiktionary.org/wiki/",
});

const japaneseWord = Object.assign(Object.create(word), {
    word: "犬",
    language: "Japanese",
    lookUpUrl: "http://jisho.org/search/",
});

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
