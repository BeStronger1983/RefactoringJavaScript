// 最簡單的解法便是讓兩個物件分別包含認識二進位與不認識二進位時所擁有的知識
class Person {
    constructor(binaryKnowledge) {
        this.binaryKnowledge = binaryKnowledge;
    }

    log(number) {
        console.log(this.whatIs(number));
    }
}

const binaryAwareness = {
    read(number) {
        return Number("0b" + number);
    },

    and(numberOne, numberTwo) {
        return numberOne & numberTwo;
    },

    xor(numberOne, numberTwo) {
        return numberOne ^ numberTwo;
    },
};

const binaryObliviousness = {
    read(number) {
        return number;
    },

    and(numberOne, numberTwo) {
        return "unknown";
    },

    xor(numberOne, numberTwo) {
        return "unknown";
    },
};

const personOne = new Person(binaryAwareness);
const personTwo = new Person(binaryObliviousness);

[personOne, personTwo].forEach((person) => {
    console.log(person.binaryKnowledge.read(10));
    console.log(person.binaryKnowledge.and(2, 3));
    console.log(person.binaryKnowledge.xor(2, 3));
});

// 像這樣將物件直接連結到其他的物件相當方便，但無法避免 read、and、xor 函式被重新宣告
