const http = require("http");
http.get("http://www.google.com/", (result) => {
    result.on("data", (chunk) => {
        console.log("這個之後才印出來，而且可能會印好幾次");
    });
});
console.log("這個先印出來");
