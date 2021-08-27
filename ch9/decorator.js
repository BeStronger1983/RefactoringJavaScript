// 裝飾器模式
class Dog {
    constructor() {
        this.cost = 50;
    }
    displayPrice() {
        return `The dog costs $${this.cost}.`;
    }
}

// 如果我們希望用特別的特徵來裝飾 dog，可以使用一個將 dog 作為參數的工廠函式
function Cute(dog) {
    const cuteDog = Object.create(dog);
    cuteDog.cost = dog.cost + 20;
    return cuteDog;
}

// 如果希望加入其他的特徵，只要額外設計類似的工廠函式即可
function Trained(dog) {
    const trainedDog = Object.create(dog);
    trainedDog.cost = dog.cost + 60;
    return trainedDog;
}

const test = require("tape");

test("base dog price", (assert) => {
    assert.equal(new Dog().displayPrice(), "The dog costs $50.");
    assert.end();
});

test("cute dog price", (assert) => {
    assert.equal(Cute(new Dog().displayPrice(), "The dog costs $70."));
    assert.end();
});

test("trained cute dog price", (assert) => {
    assert.equal(Trained(Cute(new Dog())).displayPrice, "The dog costs $130.");
    assert.end();
});
