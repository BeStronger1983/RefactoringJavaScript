class Report {
    constructor(params) {
        this.params = params;
    }
    printReport(params) {
        return params;
    }
}

// 刪除 extends Report 會發生錯誤，因為 this.params 沒初始化過。
// 自定 constructor 後就可以切斷與父類別之間的連結了。
class GenericReport {
    constructor(params) {
        this.params = params;
    }
    printReport(params) {
        return Object.assign(this.params, params);
    }
}

const wish = require("wish");
const deepEqual = require("deep-equal");
const report = new GenericReport({ whatever: "we want", to: "add" });
wish(deepEqual(report.printReport({ extra: "params" }), { whatever: "we want", to: "add", extra: "params" }));
