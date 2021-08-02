class Report {
    constructor(params) {
        this.params = params;
    }
    printReport(params) {
        return params;
    }
}

class GenericReport extends Report {
    // 刪除 constructor，因為 super 做的事情很多餘。
    // printReport 的 super 只是單純回傳 params，所以不用回傳。
    printReport(params) {
        return Object.assign(this.params, params);
    }
}

const wish = require("wish");
const deepEqual = require("deep-equal");
const report = new GenericReport({ whatever: "we want", to: "add" });
wish(deepEqual(report.printReport({ extra: "params" }), { whatever: "we want", to: "add", extra: "params" }));
