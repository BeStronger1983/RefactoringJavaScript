// null 物件模式
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

// 加入 NameString 與 NullString 類別
class NullString {
    capitalize() {
        return null;
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
console.log(personTwo.name.capitalize()); // null
