const path = require("path");
const Product = require("../model/Product");
const Order = require("../model/Order");

const loadIndexPage = async (req, res) => {
  const products = await Product.find();
  const orders = await Order.find();
  res.render(path.join("admin", "index.ejs"), {
    ordersCount: orders.length,
    productsCount: products.length,
  });
};

const loadNewProductPage = async (req, res) => {
  res.render(path.join("admin", "new-product.ejs"));
};

const loadAllProductsPage = async (req, res) => {
  const products = await Product.find();
  res.render(path.join("admin", "products.ejs"), { products: products });
};

const loadAllOrdersPage = async (req, res) => {
  const orders = await Order.find({}).populate("items.product").exec();
  res.render(path.join("admin", "orders.ejs"), { orders: orders });
};

module.exports = {
  loadIndexPage,
  loadNewProductPage,
  loadAllProductsPage,
  loadAllOrdersPage,
};
