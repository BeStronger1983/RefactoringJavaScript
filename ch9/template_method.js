// 不再使用一個變數來讓輸出函式知道它要執行的任務，而是使用子類別來去除條件判斷
class Person {}

class BinaryKnower extends Person {
    log(number) {
        console.log(this.whatIsInBinary(number));
    }

    whatIsInBinary(number) {
        return Number("0b" + number);
    }
}

class BinaryOblivious extends Person {
    log(number) {
        console.log(this.whatIs(number));
    }

    whatIs(number) {
        return number;
    }
}

const personOne = new BinaryKnower();
const personTwo = new BinaryOblivious();

[personOne, personTwo].forEach((person) => {
    person.log(10);
});
