// 产品增删改
const Product = require("../models/Products");
const validate = require("validate.js");

//! 查出来的结果是一个 promise 对象，所以在使用这些查询方法的时候一定要 .then 来拿到对象
async function getProducts(type, limit) {
  let result = null;
  if (type === 'sales') {
    result = await Product.findAndCountAll({
      order: [[type, "DESC"]],
      limit: +limit, // 拿到的 limit 是字符串要转换成数字类型
    });
  } 
  else if (type && type !== 'sales') {
    result = await Product.findAndCountAll({
      where: {
        category: type
      },
      limit: +limit, // 拿到的 limit 是字符串要转换成数字类型
    });
  }
  else {
    result = await Product.findAndCountAll({
      limit: +limit,
    });
  }
  return {
    total: result.count,
    data: JSON.parse(JSON.stringify(result.rows)),
  };
}

async function hotDisplay(limit) {
  const result = await Product.findAll({
    order: [["sales", "DESC"]],
    limit: limit,
    offset: 0,
  });

  // findAll 返回的只是一个普通的数组，所以要转化成 Json 对象的话得先 stringify 再 parse
  const jsonResult = JSON.parse(JSON.stringify(result));
  return jsonResult;
}

async function dailyDisplay(limit) {
  const result = await Product.findAndCountAll({
    offset: 0,
    limit: limit,
  });

  const data = JSON.parse(JSON.stringify(result.rows));
  return data; //* 现在只导出了数据，可以分别导出 total count 和 需要的数据
  // return {
  //   total: result.count,
  //   data: JSON.parse(JSON.stringify(result.rows))
  // };
}

async function addProduct(productObj) {
  const rule = {
    name: {
      presence: {
        allowEmpty: false,
      },
      type: "string",
    },
  };

  const result = validate(productObj, rule);
  console.log(result);
  // const instance = await Product.create(productObj);
  // return instance.toJSON();
}

async function deleteProduct(productId) {
  const result = await Product.destroy({
    // 删除是在 deleteAt 加上删除时间
    where: {
      id: productId,
    },
  });

  return result;
}

async function updateProduct(productId, changes) {
  const result = await Product.update(changes, {
    where: {
      productId,
    },
  });

  return result;
}

async function findProductById(productId) {
  const result = await Product.findByPk(productId);
  if (result) {
    return result.toJSON();
  }
  return null;
}

module.exports = {
  getProducts,
  hotDisplay,
  dailyDisplay,
  findProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
