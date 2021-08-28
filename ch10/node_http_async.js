const http = require("http");
http.get("http://refactoringjs.com/", (result) => {
    result.on("data", (chunk) => {
        console.log(chunk.toString());
        // 為什麼要 toString()
        console.log(chunk);
        // chunk 是 char Buffer，如果不 toString()，會看到下面的結果
        // <Buffer 3c 68 74 6d 6c 3e 0d 0a 3c 68 65 61 64 3e 3c 74 69 74 6c 65 3e 33 30 31 20 4d 6f 76 65 64 20 50 65 72 6d 61 6e 65 6e 74 6c 79 3c 2f 74 69 74 6c 65 3e ... 116 more bytes>
    });
});
