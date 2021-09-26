// 別回傳 null
function emailSubject() {
    return weKnowName ? `Hi ${name}` : "Hi";
}

sendEmail(emailSubject(), emailBody);

// 如果 someName 和 nullName 都擁有一個定義好的 toHi 函式
const someName = {
    value: "some name",
    toHi() {
        return `Hi ${this.value}`;
    },
};

const nullName = {
    value: "",
    toHi() {
        return "Hi";
    },
};

// 假設 getName 能拿到 someName 或 nullName
sendEmail(getName().toHi(), emailBody);
