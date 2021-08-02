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
    sayName() {
        return `my name is ${this.name}`;
    }
}

class Project extends Agent {
    sayTheName() {
        return `the project name is ${this.name}`;
    }
}

let agent;
// 把 coinToss 移出建構子之外，在 agent 之前使用 coinToss
if (coinToss()) {
    agent = new Agent("name", "user");
} else {
    agent = new Agent("name", "project");
}

const projectOrUser = Agent.makeProjetOrUser(agent);

// 加入描述測試
const wish = require("wish");

if (projectOrUser.type === "user") {
    wish(projectOrUser.sayName() === "my name is name");
} else {
    wish(projectOrUser.sayTheName() === "the project name is name");
}
