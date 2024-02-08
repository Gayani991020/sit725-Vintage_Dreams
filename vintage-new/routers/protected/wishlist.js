const express = require("express");
const router = express.Router();
const wishlistController = require("../../controllers/wishlistController");
const ROLES_LIST = require("../../roles_list");
const verifyRoles = require("../../verifyRoles");

router
  .route("/")
  .post(verifyRoles(ROLES_LIST.User), wishlistController.addToWishlist);
router
  .route("/")
  .delete(verifyRoles(ROLES_LIST.User), wishlistController.removeFromWishlist);

module.exports = router;
