class Word {
    constructor(word) {
        this.word = word;
    }
    count() {
        return this.word.length;
    }
}

class EnglishWord extends Word {}
class JapaneseWord extends Word {}

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(englishWord.word);
console.log(englishWord.count());
