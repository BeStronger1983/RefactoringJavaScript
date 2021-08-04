// 命名並提取這些函式，以簡化建構子
class Person {
    constructor(whatIs) {
        this.whatIs = whatIs;
    }

    log(number) {
        console.log(this.whatIs(number));
    }
}

function binaryAware(number) {
    return Number("0b" + number);
}

function binaryOblivious(number) {
    return number;
}

const personOne = new Person(binaryAware);
const personTwo = new Person(binaryOblivious);

[personOne, personTwo].forEach((person) => {
    person.log(10);
});
