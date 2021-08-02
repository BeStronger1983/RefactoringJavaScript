// 狼養的羊與狼種的高麗菜

// 將投擲硬幣的時刻移到函式
function coinToss() {
    return Math.random() > 0.5;
}

class User {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return `my name is ${this.name}`;
    }
}

class Project {
    constructor(name) {
        this.name = name;
    }

    sayTheName() {
        return `the project name is ${this.name}`;
    }
}

let agent;
// 直接呼叫這些建構子
if (coinToss()) {
    agent = new User("name");
} else {
    agent = new Project("name");
}

// 加入描述測試
const wish = require("wish");

if (agent instanceof User) {
    wish(agent.sayName() === "my name is name");
} else {
    wish(agent.sayTheName() === "the project name is name");
}

wish(new User("name").sayName() === "my name is name");
wish(new Project("name").sayTheName() === "the project name is name");

// 如果有兩個共享某些狀態或行為的類別，子類別未必是去除重複的好方法
// 可能會導致走上無盡進行型別檢查的道路
// 有時候只是需要一個 type 屬性
// 其他時候，可能能夠提取重複部分成為一個函式或其他物件
