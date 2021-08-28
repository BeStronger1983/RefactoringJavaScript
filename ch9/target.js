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

// 裝飾器跟適配器的差異
// 裝飾器較可能使用巢狀的包裏器來加入特徵
// 適配器較常映射不同物件間的介面

// 什麼時候不該用裝飾器跟適配器
// 假設我們可以掌控整個程式的實作，就不需要它們來複雜化程式介面，只要修改基本的程式碼即可
