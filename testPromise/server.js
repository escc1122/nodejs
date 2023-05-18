const express = require('express');
const app = express();


app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${id}`);
    res.status(id).json(id);
  });
  

  app.get('/timeout', (req, res) => {
    console.log(`/api/timeout`);
    // const id = req.params.id;
    // console.log(`${id}`);
    // res.status(id).json(id);

    setTimeout(() => {
        res.status(200).json("")
      }, 20000);

  });


// 設定路由處理 GET 請求
app.get('/api/users', (req, res) => {
  // 在此處處理取得使用者資料的邏輯
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  res.json(users);
});

// 設定路由處理 POST 請求
app.post('/api/users', (req, res) => {
  // 在此處處理新增使用者的邏輯
  // 可以從 req.body 中取得 POST 資料
  const newUser = req.body;
  // 做新增使用者的處理
  res.status(201).json(newUser);
});

// 設定路由處理 PUT 請求
app.put('/api/users/:id', (req, res) => {
  // 在此處處理更新使用者的邏輯
  // 可以從 req.params 中取得路由參數
  const userId = req.params.id;
  // 可以從 req.body 中取得 PUT 資料
  const updatedUser = req.body;
  // 做更新使用者的處理
  res.json(updatedUser);
});

// 設定路由處理 DELETE 請求
app.delete('/api/users/:id', (req, res) => {
  // 在此處處理刪除使用者的邏輯
  // 可以從 req.params 中取得路由參數
  const userId = req.params.id;
  // 做刪除使用者的處理
  res.sendStatus(204);
});

const port = 5555;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});