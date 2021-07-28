// 物件字面值
const word = {
    count() {
        return this.word.length;
    },
    lookUp() {
        return this.lookUpUrl + this.word;
    },
};

const englishWord = Object.create(word);
englishWord.word = "dog";
englishWord.language = "English";
englishWord.lookUpUrl = "https://en.wiktionary.org/wiki/";

const japaneseWord = Object.create(word);
japaneseWord.word = "犬";
japaneseWord.language = "Japanese";
japaneseWord.lookUpUrl = "http://jisho.org/search/";

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
