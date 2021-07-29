class Barky {
    bark() {
        console.log("woof woof");
    }
}

class Bitey {
    bark() {
        console.log("grrr");
    }
    bite() {
        console.log("real bite");
    }
}

class Animal {
    beFluffy() {
        console.log("fluffy");
    }
    bite() {
        console.log("normal bite");
    }
}

// 在 JavaScript 中，這種寫法只會讓 Dog 繼承 Bitey
class Dog extends (Animal, Barky, Bitey) {}

const dog = new Dog();
dog.bark();
dog.bite();
dog.beFluffy(); // TypeError: dog.beFluffy is not a function
