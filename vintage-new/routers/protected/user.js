const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const ROLES_LIST = require("../../roles_list");
const verifyRoles = require("../../verifyRoles");

// User Views
router
  .route("/account")
  .get(verifyRoles(ROLES_LIST.User), usersController.loadMyAccountPage);
router
  .route("/cart")
  .get(verifyRoles(ROLES_LIST.User), usersController.loadViewCartPage);
router
  .route("/whishlist")
  .get(verifyRoles(ROLES_LIST.User), usersController.loadWishlistPage);

module.exports = router;
