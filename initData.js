const Product = require("./models/Products");
const mockData = require("./mock/mockProducts.json");
const userServices = require("./services/userServices");

async function initData() {
  await Product.bulkCreate(mockData);

  userServices.addUser({    // ID(key) 让数据库定义 
    username: "Ellie",
    password: "a1137",
    email: "ellie.ye22@gmail.com",
    birthday: "1998-07-13",
    phone: "13980886477",
    orders: "",
  });
}

initData().then(_ => {
  console.log('Data created');
})
