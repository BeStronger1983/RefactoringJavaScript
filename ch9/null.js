// null 物件模式
class Person {
    constructor(name) {
        this.name = name;
    }
}

class AnonymousPerson extends Person {
    constructor() {
        super();
        this.name = null;
    }
}

personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(personOne.name);
console.log(personTwo.name);

function capitalize(str) {
    // 假如想對這些值做運算，就會遇到麻煩
    return str[0].toUpperCase() + str.substring(1);
}

console.log(capitalize(personOne.name));
console.log(capitalize(personTwo.name)); // TypeError: Cannot read property '0' of null
