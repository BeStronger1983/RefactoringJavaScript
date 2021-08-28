// 與 null.js 類似，但尚未創建 null 物件時的程式碼
class Person {
    constructor(name) {
        this.name = new NameString(name);
    }
}

class AnonymousPerson extends Person {
    constructor() {
        super();
        this.name = null;
    }
}

class NameString extends String {
    capitalize() {
        return new NameString(this[0].toUpperCase() + this.substring(1));
    }
    tigerify() {
        return new NameString(`${this}, the tiger`);
    }
    display() {
        return this.toString();
    }
}

const test = require("tape");

test("Displaying a person", (assert) => {
    const personOne = new Person("tony");
    assert.equal(personOne.name.capitalize().tigerify().display(), "Tony, the tiger");
    assert.end();
});

// 雖然這種做法可行，但如果測試 AnonymousPerson，處理 null 的檢查的時候會出問題
test("Displaying an anonymous person", (assert) => {
    const personTwo = new AnonymousPerson("tony");
    console.log(personTwo.name);
    assert.equal(personTwo.name.capitalize().tigerify().display(), "");
    assert.end();
});

// Uncaught TypeError: Cannot read property 'capitalize' of null
