const http = require("http");

const getBody = {
    bodyArray: [],
    saveBody: function (chunk) {
        this.bodyArray.push(chunk);
    },
    printBody: function (chunk) {
        console.log(this.bodyArray.join(""));
        this.allDone();
    },
    getResult: function (result) {
        result.on("data", this.saveBody.bind(this));
        result.on("end", this.printBody.bind(this));
    },
    allDone: function () {},
};

const test = require("tape");

test("our async routine", function (assert) {
    getBody.allDone = function () {
        assert.equal(getBody.bodyArray.length, 1);
        assert.end();
    };
    http.get("http://refactoringjs.com/", getBody.getResult.bind(getBody));
});

test("our async routine two", function (assert) {
    getBody.bodyArray = [];
    getBody.allDone = function () {};
    http.get("http://refactoringjs.com/", getBody.getResult.bind(getBody));
    assert.equal(getBody.bodyArray.length, 0);
    assert.end();
});
