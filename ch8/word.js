class Word {
    constructor(word, language) {
        this.word = word;
        this.language = language;
    }
    count() {
        return this.word.length;
    }
    lookUp() {
        return this.lookUpUrl + this.word;
    }
}

class EnglishWord extends Word {
    constructor(word) {
        super(word, "English");
        this.lookUpUrl = "https://en.wiktionary.org/wiki/";
    }
}
class JapaneseWord extends Word {
    constructor(word) {
        super(word, "Japanese");
        this.lookUpUrl = "http://jisho.org/search/";
    }
}

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(japaneseWord.lookUp());
console.log(englishWord.word);
console.log(englishWord.count());
console.log(englishWord.lookUp());
