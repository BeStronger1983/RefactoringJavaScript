// 避免破壞性函式
const x = [1, 2, 3, 4];
console.log(x.splice(1)); // [ 2, 3, 4 ]
console.log(x); // [ 1 ]

// 與 splice 不同，slice 潔身自愛
const z = [1, 2, 3, 4];
console.log(z.slice(1)); // [ 2, 3, 4 ]
console.log(z); // [ 1, 2, 3, 4 ]
