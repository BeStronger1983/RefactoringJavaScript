// 外觀模式：當我們有複雜的 API，我們並不直接使用它，而是使用一個介面
const page = {
    say(string) {
        console.log(string);
    },
    yell(string) {
        alert(string);
    },
    addNewLine() {
        document.body.appendChild(document.createElement("br"));
    },
    addText(text) {
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(text));
        document.body.appendChild(span);
    },
    changeBackground(color) {
        document.body.style.background = color;
    },
    now(asNumber = false) {
        if (asNumber === false) {
            return new Date().toLocaleTimeString();
        } else {
            return new Date().getTime();
        }
    },
    timeOnPage() {
        return (this.now(true) - this._start) / 1000 + " seconds";
    },
    loadTime() {
        return (this._start - this._loaded) / 1000 + " seconds";
    },
    eventsSoFar() {
        console.info(this._events);
    },
    _events: [],
    _start: "nothing yet",
    _loaded: "nothing yet",
};

window.onload = function () {
    page._start = page.now(true);
    page._loaded = performance.timing.navigationStart;
    document.onclick = function (event) {
        page._events.push(event.target + " clicked at " + page.now());
    };
};

// 什麼時候不該使用外觀模式：當直接與 API 互動對所有人來說都非常簡單時

// 這是本關於重構的書，而非設計模式的書，所以沒有討論到許多其他的設計模式
// 還有許多值得學習的設計模式
// 組合模式：這種模式在讀取搜尋樹的資料時非常有用，例如 JSON/物件/document 的節點
// 建造者模式：用於創造複雜的物件，對於建造測試資料時很有用
// 觀察者模式：在發佈/訂閱(publish/subscribe)、事件或觀察時常常被使用
// 原型模式：此為 JavaScript 內建的模式
// 迭代模式：由於已經有很多現成的迭代器了，所以沒必要自己再做一個(包括迴圈、陣列函式、生成器(generator))
// 代理模式：我們會在第 10 章使用測試替身(testbouble framework)，它假裝並斷言真的函式被呼叫
// 請注意，JavaScript 中仍有內建的代理模式物件，而另外我們也可以用類似 withoutNull 的方法來包裏物件
