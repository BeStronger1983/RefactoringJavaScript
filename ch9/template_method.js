// 一個函數式變種
// 如果想用物件導向，那之前的做法比較好。
// 如果偏向函數式，這個方法是一個好選擇。
function log(person, number) {
    console.log(person.whatIs(number));
}

class BinaryKnower {
    whatIs(number) {
        return Number("0b" + number);
    }
}

class BinaryOblivious {
    whatIs(number) {
        return number;
    }
}

const personOne = new BinaryKnower();
const personTwo = new BinaryOblivious();

[personOne, personTwo].forEach((person) => {
    log(person, 10);
});
