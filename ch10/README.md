第十章 重構異步
=

* [為什麼需要異步？](#why)
* [修復「毀滅金字塔(pyramid of doom)」](#fix)
* [測試異步程式碼](#test)
* [Promises](#promise)

<h1 id="why">為什麼需要異步？</h2>

1. 我們希望程式是有效率的，不用等待幾秒、幾分甚至更長的時間來進行 web 請求、處理資料。
2. 有些外部的模組、函式庫只提供異步。

習慣同步的人，可能會預期 node 的 http 模組的[運作方式是這樣](./node_http_sync.js)。

如果我們的遠端呼叫是同步的，它將會「停止整個世界」，使我們的程式進入等待。不過，當我們看到[最直接的替代方案](./node_http_async.js)時，會因為它的複雜而感到沮喪。

上面的例子用了異步，而且有兩層，還用了函數式設計。如果試著在這段程式碼後面，[寫些同步程式設計的程式碼](./node_http_async_more_sync.js)，將會遇到更多挫折。

以為會得到一個存放 chunk 的陣列，結果印出一個空的陣列 []。這是因為 http.get 會立刻返回，[而在 callback 將 chunk 存進陣列前，console.log 已經進行了](./in_other_words.js)。

雖然可以等一下再來取得異步的執行結果，[但我們不能確定要等多久才夠](./unsure.js)。

<h2>setTimeout 與 Event Loop</h3>

值得注意的是，setTimeout(myFunction, 300) 並非真的在 300 毫秒後執行 myFunction。首先它會返回一個 Timeout 物件，然後將 myFunction 加入 Event Loop 中，並在 300 毫秒後執行。但有可能因為 Event Loop 在執行其他事情而被卡住。

當 timeout 設定為 0 秒時，程式碼會被立刻執行嗎？會比同步的程式碼更快執行嗎？請看看[這個例子](./chicken_or_egg.js)。

再看看[這個例子](./chickens_or_egg.js)，蛋永遠最快，但雞不一定，Chrome 跟 FireFox 的順序不同，但每次的結果一致。node 的執行結果不是每次都一樣。

setTimeout 的方法有一些問題，看來我們最好回到[第一次異步的做法](./node_http_async.js)。但這真的是最好的寫法嗎？

<h1 id="fix">修復「毀滅金字塔(pyramid of doom)」</h2>

毀滅金字塔是指程式碼向右進行多次縮排所形成的形狀。

```javascript
levelOne(function(){
    levelTwo(function(){
        levelThree(function(){
            levelFour(function(){
                // 其他程式碼
            })
        });
    });
});
```

還有一個跟它相關的「回調地獄(callback hell)」，跟程式碼形狀比較無關，是用來形容很多層的 callback 函式。

<h1 id="test">測試異步程式碼</h2>

<h1 id="promise">Promises</h2>
