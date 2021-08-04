// 嘗試將函式移動到 Person 物件中
class Person {
    constructor(whatIs) {
        this.whatIs = whatIs;
    }

    log(number) {
        console.log(this.whatIs(number));
    }

    static binaryAware(number) {
        return Number("0b" + number);
    }

    static binaryOblivious(number) {
        return number;
    }
}

const personOne = new Person(Person.binaryAware);
const personTwo = new Person(Person.binaryOblivious);

[personOne, personTwo].forEach((person) => {
    person.log(10);
});

// 這是我們試圖避免的，在 Person(內容) 與是否理解二進位(策略)是不同層次之間的耦合
// 因為是否理解二進位是我們之後希望留給其他物件的策略
// 因此最好是將是否理解二進位以及 Person 物件分開
