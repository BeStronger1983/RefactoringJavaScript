// 在創造 personOne 與 personTwo 物件之後為它們加入函式，可以避免型別檢查
class Person {
    log(number) {
        console.log(this.whatIs(number));
    }
}

const personOne = new Person();
personOne.whatIs = (number) => {
    return Number("0b" + number);
};
const personTwo = new Person();
personTwo.whatIs = (number) => {
    return number;
};

[(personOne, personTwo)].forEach((person) => {
    person.log(10);
});
