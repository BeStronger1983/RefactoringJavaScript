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

// 用 mixin 達成多重繼承
const myPet = Object.assign(Object.create(animal), barky, bitey);
myPet.bark();
myPet.bite();
myPet.beFluffy();
