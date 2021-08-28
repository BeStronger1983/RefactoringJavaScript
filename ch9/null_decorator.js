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
