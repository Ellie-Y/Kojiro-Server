const Product = require("./models/Products");
const Size = require('./models/Size')
const Taste = require('./models/Taste')
const mockProducts = require('./mock/mockProducts.json')
const mockSize = require('./mock/mockSize.json')
const mockTaste = require('./mock/mockTaste.json')

const userServices = require("./services/userServices");

async function initData() {
  await Product.bulkCreate(mockProducts)
  await Size.bulkCreate(mockSize)
  await Taste.bulkCreate(mockTaste)

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
