class Target {
    hello() {
        console.log("hello");
    }
    goodbye() {
        console.log("goodbye");
    }
}

class Adaptee {
    hi() {
        console.log("hi");
    }
    bye() {
        console.log("bye");
    }
}

const formal = new Target();
formal.hello();
formal.goodbye();

const casual = new Adaptee();
casual.hi();
casual.bye();

class Adapter {
    constructor(adaptee) {
        this.hello = adaptee.hi;
        this.goodbye = adaptee.bye;
    }
}

const adaptedCasual = new Adapter(new Adaptee());
adaptedCasual.hello();
adaptedCasual.goodbye();

// casual 跟 formal 物件的介面不同
// 如果我們需要支援同個介面，適配器可以重新映射一個新的出來
