第十章 重構異步
=

* [為什麼需要異步？](#why)
* [修復「毀滅金字塔(pyramid of doom)」](#fix)
* [測試異步程式碼](#test)
* [Promises](#promise)

<h2 id="why">為什麼需要異步？</h2>

1. 我們希望程式是有效率的，不用等待幾秒、幾分甚至更長的時間來進行 web 請求、處理資料。
2. 有些外部的模組、函式庫只提供異步。

習慣同步的人，可能會預期 node 的 http 模組的[運作方式是這樣](./node_http_sync.js)。

如果我們的遠端呼叫是同步的，它將會「停止整個世界」，使我們的程式進入等待。不過，當我們看到[最直接的替代方案](./node_http_async.js)時，會因為它的複雜而感到沮喪。

<h2 id="fix">修復「毀滅金字塔(pyramid of doom)」</h2>

<h2 id="test">測試異步程式碼</h2>

<h2 id="promise">Promises</h2>
