// 未使用 null 物件
class Person {
    constructor(name) {
        this.name = new NameString(name);
    }
}

class AnonymousPerson extends Person {
    constructor() {
        super();
        this.name = new NullString();
    }
}

// 使用鏡像介面的程式碼
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

class NameString extends String {
    capitalize() {
        return new NameString(this[0].toUpperCase() + this.substring(1));
    }
    tigerify() {
        if (this === null) {
            return null;
        } else {
            return new NameString(`${this}, the tiger`);
        }
    }
    display() {
        if (this === null) {
            return "";
        } else {
            return this.toString();
        }
    }
}

personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(personOne.name.capitalize().tigerify().display()); // Tony, the tiger
console.log(personTwo.name.capitalize().tigerify().display()); // 空白字串
