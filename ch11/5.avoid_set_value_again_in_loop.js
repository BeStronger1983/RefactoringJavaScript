// 避免在迴圈中重新賦值
[3, 4, 2].forEach((element) => {
    console.log(element);
});

// 如果要用迴圈修改陣列的值，可以用 map 創造新陣列
console.log([3, 4, 2].map((element) => element * 2));

// 想要過濾陣列剔除一些元素時，可以用 filter
console.log([3, 4, 2].filter((element) => element % 2 == 0));

// 想要將整個陣列轉換成其他型別的值，可以用 reduce
console.log([3, 4, 2].reduce((element, accumulator) => element + accumulator));

// 若以 for 迴圈來實作以上功能，很可能都會需要一個不斷被重新賦值的外部變數
// 原子性的創建變數會使得測試更加容易，且值從不變化
