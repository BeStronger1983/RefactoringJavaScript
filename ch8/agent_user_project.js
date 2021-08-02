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
