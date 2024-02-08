const Product = require('../model/Product');
const cartController = require('./cartController');
const wishlistController = require("./wishlistController");

const loadHomePage = async (req, res) => {
    const products = await Product.find();
    const cart = await cartController.cartData(req, res);
    const wishlist = await wishlistController.wishlistData(req, res);
    res.render('index.ejs', { products : products , cart : cart, wishlist : wishlist});
}

module.exports = {
    loadHomePage
}