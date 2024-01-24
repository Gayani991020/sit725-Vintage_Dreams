const path = require('path');
const Product = require('../model/Product');

const loadIndexPage = async (req, res) => {
    res.render(path.join('admin', 'index.ejs'));
}

const loadNewProductPage = async (req, res) => {
    res.render(path.join('admin', 'new-product.ejs'));
}

const loadAllProductsPage = async (req, res) => {
    const products = await Product.find();
    res.render(path.join('admin', 'all-products.ejs'), { products : products });
}

module.exports = {
    loadIndexPage,
    loadNewProductPage,
    loadAllProductsPage
}