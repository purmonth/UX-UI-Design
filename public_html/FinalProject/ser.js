const express = require('express')

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()

const port = 5527

// handle `/step1` url
// 處理 `/step1` 網址
app.get('/step1', (req, res) => {
  // response browser
  // 回應瀏覽器
  res.send('hello world')
})

// start the server
// 啟動伺服器
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
