const User = require("../model/User");
const Order = require("../model/Order");
const Wishlist = require("../model/Wishlist");
const cartController = require("./cartController");
const wishlistController = require("./wishlistController");

const loadMyAccountPage = async (req, res) => {
  const email = req.session.email;
  const foundUser = await User.findOne({ email: email }).exec();
  const cart = await cartController.cartData(req, res);
  const wishlist = await wishlistController.wishlistData(req, res);
  // get orders for user with cart.items details from Products collection
  const orders = await Order.find({ user: email })
    .populate("items.product")
    .exec();
  res.render("account.ejs", { user: foundUser, cart: cart, orders: orders, wishlist: wishlist});
};
const loadViewCartPage = async (req, res) => {
  const email = req.session.email;
  const foundUser = await User.findOne({ email: email }).exec();
  const cart = await cartController.cartData(req, res);
  const wishlist = await wishlistController.wishlistData(req, res);
  res.render("cart.ejs", { user: foundUser, cart: cart, wishlist: wishlist});
};
const loadWishlistPage = async (req, res) => {
  const email = req.session.email;
  const foundUser = await User.findOne({ email: email }).exec();
  const cart = await cartController.cartData(req, res);
  const wishlist = await wishlistController.wishlistData(req, res);
  res.render("wishlist.ejs", { user: foundUser, wishlist: wishlist, cart: cart });
};
module.exports = {
  loadMyAccountPage,
  loadViewCartPage,
  loadWishlistPage,
};
