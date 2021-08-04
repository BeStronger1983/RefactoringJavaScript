// 狀態模式可以自然而然的由策略模式變化而來
// 但是如果按照這種方法，策略模式可能很快地就會造成一團混亂
class Person {
    constructor(readKnowledge, andKnowledge, xorKnowledge) {
        this.read = readKnowledge;
        this.and = andKnowledge;
        this.xor = xorKnowledge;
    }

    log(number) {
        console.log(this.whatIs(number));
    }
}

const binary = {
    readAware(number) {
        return Number("0b" + number);
    },
    readOblivious(number) {
        return number;
    },
    andAware(numberOne, numberTwo) {
        return numberOne & numberTwo;
    },
    andOblivious(numberOne, numberTwo) {
        return "unknown";
    },
    xorAware(numberOne, numberTwo) {
        return numberOne ^ numberTwo;
    },
    xorOblivious(numberOne, numberTwo) {
        return "unknown";
    },
};

const personOne = new Person(binary.readAware, binary.andAware, binary.xorAware);
const personTwo = new Person(binary.readOblivious, binary.andOblivious, binary.xorOblivious);

[personOne, personTwo].forEach((person) => {
    console.log(person.read(10));
    console.log(person.and(2, 3));
    console.log(person.xor(2, 3));
});
