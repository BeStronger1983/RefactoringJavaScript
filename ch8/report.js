// 如果只有 GenericReport 在使用 Report，那 Report 就可以刪除了。

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
