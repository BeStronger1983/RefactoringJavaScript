// 狼養的羊與狼種的高麗菜

class Agent {
    constructor(name, type) {
        this.name = "name";

        if (Math.random() > 0.5) {
            this.type = "user";
        } else {
            this.type = "project";
        }
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

// 問題的根源是這兩行
const agent = new Agent("name");
const projectOrUser = Agent.makeProjetOrUser(agent);

// 加入描述測試
const wish = require("wish");

if (projectOrUser.type === "user") {
    wish(projectOrUser.sayName() === "my name is name");
} else {
    wish(projectOrUser.sayTheName() === "the project name is name");
}
