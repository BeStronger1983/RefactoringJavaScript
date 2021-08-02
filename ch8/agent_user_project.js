// 狼養的羊與狼種的高麗菜

// 將投擲硬幣的時刻移到函式
function coinToss() {
    return Math.random() > 0.5;
}

class User {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sayName() {
        return `my name is ${this.name}`;
    }
}

class Project {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sayTheName() {
        return `the project name is ${this.name}`;
    }
}

let agent;
// 直接呼叫這些建構子
if (coinToss()) {
    agent = new User("name", "user");
} else {
    agent = new Project("name", "project");
}

// 加入描述測試
const wish = require("wish");

if (agent.type === "user") {
    wish(agent.sayName() === "my name is name");
} else {
    wish(agent.sayTheName() === "the project name is name");
}

wish(new User("name", "user").sayName() === "my name is name");
wish(new Project("name", "project").sayTheName() === "the project name is name");
