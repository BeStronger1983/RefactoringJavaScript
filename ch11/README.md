# 第十一章 使用函數式範式重構

[用迴圈尋找一個元素](./1.recursive.js)

[用遞迴函式階乘來探討引用透明](./2.referentially_transparent.js)

[避免重新賦值](./3.do_not_assign_value_again.js)

[一個更難處理的例子](./4.more_complex_case.js)

[避免在迴圈中重新賦值](./5.avoid_set_value_again_in_loop.js)

如果你正在找尋一個前往高階函式的出發點，[Array 文件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array) 會是個好選擇。

<h2>但你可以用 for 迴圈做任何事！</h2>

你可以迭代所有的值然後創造其他值，並可以用 for 迴圈或 forEach 實作它們全部

-   every
-   filter
-   find
-   forEach
-   map
-   reduce/reduceRight
-   some

但何必呢？用正確的工具來做正確的工作。map 給你一個內部全被轉換過的陣列，every、filter、find、some 會基於提供的條件回傳某些東西。

reduce 會基於陣列給出某個新值，如果想要取得聚合的值(和/積/物件/字串/陣列)，reduce 正是你想要的。如果你需要的型別跟遍歷的值不同，你很可能會需要 reduce。

這些函式都是以函式為參數，是個開始使用 JavaScript 一級函式(函式做為其他函式的輸入與輸出)的良好起點。將這想像成告訴計算機要做什麼，而非如何做到。

<h1>避免在條件式主體中重新賦值</h1>

[程式碼](./6.avoid_set_value_again_in_if.js)

<h1>避免破壞性函式</h1>

[程式碼](./7.avoid_destructive_function.js)

陣列有很多破壞性函式，包括 splice、fill、push、pop。

物件則有 define Properties。

數字和字串有 + 和 =。

陣列也能改變特定索引位置的值。例如 x[0] = "something"

物件有 Object.assign，但可以給它 {} 以避免破壞。

.prop = 和 [prop] = 語法都能修改或創造屬性

僅僅為了避免破壞而放棄直接賦值與大量函式看起來很瘋狂，但遵循這個原則，比在上千行程式碼中追蹤一堆遊蕩的全域變數要容易多了。

<h1>整體上避免破壞</h1>

如果想要避免變數變動，那就創造一個新的變數。

「全域變數是邪惡的」被視為常識。但「重新賦值」卻不享有這份殊榮，這很怪異，畢竟它們是一體兩面。

<h1>別回傳 null</h1>

[程式碼](./8.dont_return_null.js)

<h1>引用透明與避免狀態</h1>

引用透明(Referential Transparent)：能夠將這個函式的呼叫用回傳值取代，而不會改變整個程式的行為，稱為引用透明。

[程式碼](./9.referential_transparent.js)

硬碟空間很便宜，如果能以時間做索引的話，查找並不太耗費成本。如果履寫、更新、丟棄了資料庫訊息，只要給出一個特定查找，你應該可以回放(play back)你應用程式的狀態(也假設能夠擷取到程式碼的版本)。

<h2>我們現在是在把變數寫死嗎？我的彈性呢？</h2>

無論何時當我們產生一個狀態轉變時，我們也創建一個時間的概念。狀態改變前是一個世界，改變後是另一個世界。一旦你摧毀了訊息，去了解哪裡出了問題，或恢復到過去狀態，會變得困難許多。

引用透明讓我們有了一個能夠快取的機會。

重點是沒有什麼東西必須位於一個物件當中(除了代表最外層的物件)。我們可以用函式儲存值而不用創建物件。我們的整個程式可以是一個包裏著其他函式的函式，而透過傳入一個參數來啟動整個資料流。
