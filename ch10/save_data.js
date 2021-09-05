const http = require("http");

let bodyArray = [];

const saveBody = function (chunk) {
    bodyArray.push(chunk);
};

function printBody(chunk) {
    console.log(bodyArray.join(""));
}

function getResults(result) {
    result.on("data", saveBody);
    result.on("end", printBody);
}

http.get("http://refactoringjs.com/", getResults);
