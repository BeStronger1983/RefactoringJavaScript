// 在建構物件時加入額外的函式，也可以避免型別檢查
class Person {
    constructor(whatIs) {
        this.whatIs = whatIs;
    }

    log(number) {
        console.log(this.whatIs(number));
    }
}

const personOne = new Person((number) => {
    return Number("0b" + number);
});

const personTwo = new Person((number) => {
    return number;
});

[personOne, personTwo].forEach((person) => {
    person.log(10);
});
