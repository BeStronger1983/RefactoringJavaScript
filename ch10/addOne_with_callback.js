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

// 單純回傳結果的話，addOne 函式及其測試會很不同
function addOneSync(addend) {
    return addend + 1;
}

test("our addOneSync function", (assert) => {
    assert.equal(addOneSync(3), 4);
    assert.end();
});

// three 函式無法用同步測試
test("our three function", (assert) => {
    three((result, callback) => {
        assert.equal(result, 3);
        assert.equal(callback, console.log);
        assert.end();
    });
});
