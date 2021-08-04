class Person {
    constructor(whatIs) {
        this.whatIs = whatIs;
    }

    log(number) {
        console.log(this.whatIs(number));
    }
}

// 為避免上述的耦合，我們創造一個包含此策略的物件
// 策略被妥善的藏到了一個物件之中，這是非常方便的做法
// 因為如果我們需要創造一個函式來代表對數字的不同解讀法，例如八進位或十六進位
// 我們並不需要創立一個全新的子類別
const binary = {
    aware(number) {
        return Number("0b" + number);
    },
    oblivious(number) {
        return number;
    },
};

const personOne = new Person(binary.aware);
const personTwo = new Person(binary.oblivious);

[personOne, personTwo].forEach((person) => {
    person.log(10);
});
