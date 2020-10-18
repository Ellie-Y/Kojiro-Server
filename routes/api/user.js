const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
  res.send('获取全部用户');
});

router.get('/:id', (req, res) => {
  res.send('获取某个用户');
});

router.post('/', (req, res) => {
  res.send('添加用户');
});

router.put('/:id', (req, res) => {
  res.send('修改用户');
});

router.delete('/:id', (req, res) => {
  res.send('删除用户');
});


module.exports = router