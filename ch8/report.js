class Report {
    constructor(params) {
        this.params = params;
    }
    printReport(params) {
        return params;
    }
}

class GenericReport extends Report {
    constructor(params) {
        super(params);
        this.params = params;
    }
    printReport(params) {
        return super.printReport(Object.assign(this.params, params));
    }
}

class ClientReport extends GenericReport {
    constructor(params) {
        super(params);
        this.params = params;
    }
    printReport(params) {
        return super.printReport(Object.assign(this.params, params));
    }
}

class SpecificClientReport extends ClientReport {
    constructor(params) {
        super(params);
        this.params = params;
    }
    printReport(params) {
        return super.printReport(Object.assign(this.params, params));
    }
}

// 假設 SpecificClientReport 沒有特別之處，改為 Report
const report = new Report({ whatever: "we want", to: "add" });
console.log(report.printReport({ extra: "params" }), true);

const wish = require("wish");
const deepEqual = require("deep-equal");
// 測試通過，可以安全的重構
wish(deepEqual(report.printReport({ extra: "params" }), { whatever: "we want", to: "add", extra: "params" }));
// 發生錯誤
