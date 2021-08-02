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

// 改為 GenericReport
const report = new GenericReport({ whatever: "we want", to: "add" });
console.log(report.printReport({ extra: "params" }), true);

const wish = require("wish");
const deepEqual = require("deep-equal");
wish(deepEqual(report.printReport({ extra: "params" }), { whatever: "we want", to: "add", extra: "params" }));
// 測試通過，表示可以刪除 ClientReport 跟 SpecificClientReport
