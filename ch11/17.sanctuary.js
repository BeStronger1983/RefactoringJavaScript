const { create, env } = require("sanctuary");
const S = create({ checkTypes: true, env });

R = require("ramda");
console.log(R.add("hello", 3)); // NaN

// console.log(S.add("hello")(3));
// TypeError: ‘add’ applied to the wrong number of arguments

// 這樣就不會檢查型別了，但要小心使用
const S2 = create({ checkTypes: false, env });
console.log(S2.add("hello")(3)); // "hello3"

// 可以這樣組合函式
const getAThree = S.find((x) => x === 3);

// 也可以用無參數風格
const getAThree2 = S.find(S.equals(3));

console.log(getAThree([3, 4])); // Just (3)
console.log(getAThree2([3, 4])); // Just (3)

console.log(getAThree([8, 4])); // Nothing
console.log(getAThree2([8, 4])); // Nothing
