// 與 null.js 類似，但尚未創建 null 物件時的程式碼
class Person {
    constructor(name) {
        this.name = new NameString(name);
    }
}

// 改變 AnonymousPerson 並加入 NullString
class AnonymousPerson extends Person {
    constructor() {
        super();
        this.name = new NullString(); // 修改到原本的程式碼，容易產生問題
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

class NullString {
    capitalize() {
        return this;
    }
    tigerify() {
        return this;
    }
    display() {
        return "";
    }
}

const test = require("tape");

test("Displaying a person", (assert) => {
    const personOne = new Person("tony");
    assert.equal(personOne.name.capitalize().tigerify().display(), "Tony, the tiger");
    assert.end();
});

test("Displaying an anonymous person", (assert) => {
    const personTwo = new AnonymousPerson("tony");
    assert.equal(personTwo.name.capitalize().tigerify().display(), "");
    assert.end();
});
