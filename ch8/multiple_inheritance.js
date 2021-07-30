const barky = {
    bark() {
        console.log("woof woof");
    },
};

const bitey = {
    bark() {
        console.log("grrr");
    },
    bite() {
        console.log("real bite");
    },
};

const animal = {
    beFluffy() {
        console.log("fluffy");
    },
    bite() {
        console.log("normal bite");
    },
};

// 希望新的物件能有相同行為，但又不想要原型的包袱，可以這樣做
const myPet = Object.assign({}, animal, barky, bitey);
myPet.bark();
myPet.bite();
myPet.beFluffy();

console.log(myPet);
// { bark: [Function: bark], bite: [Function: bite] }
console.log(Object.getPrototypeOf(myPet));
// { beFluffy: [Function: beFluffy], bite: [Function: bite] }

// 當 myPet 要使用 beFluffy 函式時，實際上是透過它的原型 animal 去拿取的
// 所以一旦修改了 animal 的 beFluffy 函式，myPet 也會跟著更新

animal.beFluffy = function () {
    console.log("not fluffy");
};
myPet.beFluffy();
// not fluffy

// 為 animal 添加屬性，但不影響 myPet
animal.hasBankAccount = false;
console.log(myPet.hasBankAccount); // undefined

// 如果我們試圖去擴展 bite 函式
bitey.bite = function () {
    console.log("don't bite");
};
myPet.bite();
// real bite

// bite 函式是直接從 bitey 接到 myPet 上的，雖然 myPet 的原型(animal) 也有 bite
// 但呼叫時會先呼叫直接附在 myBet 的 bite。

// 這是真正的複製，bitey 與 myPet 之間並不存在連結。

// myPet 是從 bitey 還是 barky 取得 bark 的呢？
// Object.assign 中右邊參數造成的影響會覆蓋掉左邊參數造成的影響
// 因為 bitey 是最後一個參數，因此 bitey 的 bark 勝過了 barky 的 bark。
