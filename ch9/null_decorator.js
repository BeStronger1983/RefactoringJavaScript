class Person {
    constructor(name) {
        this.name = new NameString(name);
    }
}

// 假設我們現在動不了 AnonymousPerson
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

// 但我們新增 NullString 類別來應用裝飾器模式是沒問題的
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

// 這些也是新的
function WithoutNull(person) {
    const personWithoutNull = Object.create(person);
    if (personWithoutNull.name === null) {
        personWithoutNull.name = new NullString();
    }
    return personWithoutNull;
}

const test = require("tape");

test("Displaying a person", (assert) => {
    const personOne = new Person("tony");
    assert.equal(personOne.name.capitalize().tigerify().display(), "Tony, the tiger");
    assert.end();
});

test("Displaying an anonymous person", (assert) => {
    const personTwo = new AnonymousPerson(null);
    // 使用 WithoutNull 包覆 personTwo 是新的實作法
    assert.equal(WithoutNull(personTwo).name.capitalize().tigerify().display(), "");
    assert.end();
});
