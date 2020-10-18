const express = require("express");
const router = express.Router();
const productServ = require("../../services/productsServices");
const sendResult = require("../utils/resultFormat");

router.get("/", async (req, res) => {
  // url 拼接的方式传参
  const type = req.query.type || "";
  const limit = req.query.limit || 10;
  const result = await productServ.getProducts(type, limit);
  res.send(sendResult.returnData(result));
});

router.get("/:id", async (req, res) => {
  const result = await productServ.findProductById(req.params.id)
  res.send(sendResult.returnData(result));
});

router.post("/", (req, res) => {
  res.send("添加产品");
});

router.put("/:id", (req, res) => {
  res.send("修改产品");
});

router.delete("/:id", (req, res) => {
  res.send("删除产品");
});

module.exports = router;
