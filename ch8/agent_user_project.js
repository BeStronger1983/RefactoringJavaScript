// 狼養的羊與狼種的高麗菜

// 將投擲硬幣的時刻移到函式
function coinToss() {
    return Math.random() > 0.5;
}

class Agent {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    static makeProjetOrUser(agent) {
        if (agent.type === "user") {
            return Object.assign(Object.create(new User()), agent);
        } else {
            return Object.assign(Object.create(new Project()), agent);
        }
    }
}

class User extends Agent {
    // 推入建構子到子類別
    constructor(name, type) {
        super();
        this.name = name;
        this.type = type;
    }

    sayName() {
        return `my name is ${this.name}`;
    }
}

class Project extends Agent {
    // 推入建構子到子類別
    constructor(name, type) {
        super();
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

const projectOrUser = Agent.makeProjetOrUser(agent);

// 加入描述測試
const wish = require("wish");

if (projectOrUser.type === "user") {
    wish(projectOrUser.sayName() === "my name is name");
} else {
    wish(projectOrUser.sayTheName() === "the project name is name");
}
