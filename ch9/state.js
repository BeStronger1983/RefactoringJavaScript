// 完成狀態模式，定義物件之間的轉換
class Person {
    constructor(binaryKnowledge) {
        this.binaryKnowledge = binaryKnowledge;
    }

    change(binaryKnowledge) {
        this.binaryKnowledge = binaryKnowledge;
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

    forget(person) {
        person.change(binaryObliviousness);
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

    learn(person) {
        person.change(binaryAwareness);
    },
};

const personOne = new Person(binaryAwareness);
const personTwo = new Person(binaryObliviousness);

[personOne, personTwo].forEach((person) => {
    console.log(person.binaryKnowledge.read(10));
    console.log(person.binaryKnowledge.and(2, 3));
    console.log(person.binaryKnowledge.xor(2, 3));
});

personOne.binaryKnowledge.forget(personOne);
personTwo.binaryKnowledge.learn(personTwo);

console.log("after forget and learn");

[personOne, personTwo].forEach((person) => {
    console.log(person.binaryKnowledge.read(10));
    console.log(person.binaryKnowledge.and(2, 3));
    console.log(person.binaryKnowledge.xor(2, 3));
});

// 兩個可疑的地方
// 1. 把 Person 傳遞到 forget 跟 learn 看起有點笨拙
// 2. binaryKnowledge 仍暴露在會被重複定義的風險之中
