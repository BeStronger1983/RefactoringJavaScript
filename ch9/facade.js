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
