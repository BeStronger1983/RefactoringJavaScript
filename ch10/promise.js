four().then(addOne).then(console.log);

function addOne(addend) {
    return Promise.resolve(addend + 1);
}

function four() {
    return new Promise(function (resolve, _reject) {
        setTimeout(() => resolve(4), 500);
    });
}
