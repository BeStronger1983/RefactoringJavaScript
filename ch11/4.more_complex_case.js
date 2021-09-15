// 一個更難處理的例子
function func(x, y) {
    if (x > 1000) {
        return x;
    } else if ((x = x + 7) >= 9) {
        return x;
    } else {
        return y;
    }
}

// 先把重新賦值拿掉
function func2(x, y) {
    if (x > 1000) {
        return x;
    } else if (x + 7 >= 9) {
        return x + 7;
    } else {
        return y;
    }
}

// 避免重複執行
function func3(x, y) {
    const newX = x + 7;

    if (x > 1000) {
        return x;
    } else if (newX >= 9) {
        return newX;
    } else {
        return y;
    }
}

// 用不到就不計算
function func4(x, y) {
    if (x > 1000) {
        return x;
    } else {
        const newX = x + 7;

        if (newX >= 9) {
            return newX;
        } else {
            return y;
        }
    }
}

// 不使用 const 而使用記憶化函式
function func5(x, y) {
    if (x > 1000) {
        return x;
    } else {
        if (memoizedAddSeven(x) >= 9) {
            return memoizedAddSeven(x);
        } else {
            return y;
        }
    }
}

// 用一個能快取的函式來取代拿來快取的變數，讓我們可以返回到原本更簡潔的模式
function func6(x, y) {
    if (x > 1000) {
        return x;
    } else if (memoizedAddSeven(x) >= 9) {
        return memoizedAddSeven(x);
    } else {
        return y;
    }
}

// 如果真的了解程式碼，可以不用快取變數、函式，還能保有效能
function func7(x, y) {
    if (x > 1000) {
        return x;
    } else if (x >= 2) {
        return x + 7;
    } else {
        return y;
    }
}
