// 避免在條件式主體中重新賦值

// 不要這樣
let emailSubject = "Hi";

if (weKnowName) {
    emailSubject = emailSubject + " " + name;
}

sendEmail(emailSubject, emailBody);

if (weKnowName) {
    let emailSubject = `Hi ${name}`;
} else {
    let emailSubject = "Hi";
}

sendEmail(emailSubject, emailBody);

// 試著這樣，當我們要做一些變換時，更有彈性
function emailSubject() {
    if (weKnowName) {
        let subject = `Hi ${name}`;
    } else {
        let subject = "Hi";
    }

    return subject;
}

sendEmail(emailSubject(), emailBody);

// 然後顯然我們不需要任何的賦值
function emailSubject() {
    if (weKnowName) {
        return `Hi ${name}`;
    } else {
        return "Hi";
    }
}

sendEmail(emailSubject(), emailBody);

// 可以用三元表達式來簡化
function emailSubject() {
    return weKnowName ? `Hi ${name}` : "Hi";
}

sendEmail(emailSubject(), emailBody);
