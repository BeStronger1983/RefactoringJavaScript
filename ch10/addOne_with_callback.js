// 接收 callback 版的 addOne 函式
function addOne(addend, callback) {
    callback(addend + 1);
}

function three(callback) {
    setTimeout(function () {
        callback(3, console.log);
    }, 500);
}

three(addOne);

// callback 風格的測試
const test = require("tape");

test("our addOne function", (assert) => {
    addOne(3, (result) => {
        assert.equal(result, 4);
        assert.end();
    });
});
