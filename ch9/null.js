// null 物件模式
class Person {
    constructor(name) {
        this.name = name;
    }
}

class AnonymousPerson extends Person {
    constructor() {
        super();
        this.name = null; // 回到使用 null 的方法
    }
}

personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(personOne.name);
console.log(personTwo.name);

function capitalize(str) {
    // capitalize 中要加入型別檢查
    if (str == null) {
        return null;
    } else {
        return str[0].toUpperCase() + str.substring(1);
    }
}

console.log(capitalize(personOne.name));
console.log(capitalize(personTwo.name)); // Cannot read property 'toUpperCase' of undefined

// 試試其他的方法
function tigerify(str) {
    if (str === null) {
        return null;
    } else {
        return `${str}, the tiger`;
    }
}

// 執行了另一個 null 檢查，好讓我們顯示空白字串
function display(str) {
    if (str === null) {
        return "";
    } else {
        return str;
    }
}

console.log(display(tigerify(capitalize(personOne.name)))); // Tony, the tiger
console.log(display(tigerify(capitalize(personTwo.name)))); // 顯示空白字串
