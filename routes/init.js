const express = require("express");
const app = express();
const cors = require('cors');

// 解决跨域
app.use(cors(), (req, res, next) => {
  next();
});
app.use(express.urlencoded({ extended: true }))   // 解析拼接的 URL
app.use(express.json())       // 解析传过来在 body 中的 json 数据

// 处理产品的请求
app.use('/api/product', require('./api/product'));

// 处理用户相关的请求
app.use('/api/user', require('./api/user'));

// 处理错误的中间件
app.use(require('./errorMiddleware'));

// server
const port = "5050";
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
