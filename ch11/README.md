第十一章 使用函數式範式重構
=

[用迴圈尋找一個元素](./1.recursive.js)

[用遞迴函式階乘來探討引用透明](./2.referentially_transparent.js)

[避免重新賦值](./3.do_not_assign_value_again.js)

[一個更難處理的例子](./4.more_complex_case.js)

[避免在迴圈中重新賦值](./5.avoid_set_value_again_in_loop.js)

如果你正在找尋一個前往高階函式的出發點，[Array 文件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array) 會是個好選擇。

<h2>但你可以用 for 迴圈做任何事！</h2>

你可以迭代所有的值然後創造其他值，並可以用 for 迴圈或 forEach 實作它們全部

* every
* filter
* find
* forEach
* map
* reduce/reduceRight
* some

但何必呢？用正確的工具來做正確的工作。map 給你一個內部全被轉換過的陣列，every、filter、find、some 會基於提供的條件回傳某些東西。

reduce 會基於陣列給出某個新值，如果想要取得聚合的值(和/積/物件/字串/陣列)，reduce 正是你想要的。如果你需要的型別跟遍歷的值不同，你很可能會需要 reduce。

這些函式都是以函式為參數，是個開始使用 JavaScript 一級函式(函式做為其他函式的輸入與輸出)的良好起點。將這想像成告訴計算機要做什麼，而非如何做到。
