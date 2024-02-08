const express = require("express");
const router = express.Router();
const cartController = require("../../controllers/cartController");
const ROLES_LIST = require("../../roles_list");
const verifyRoles = require("../../verifyRoles");

router.route("/").post(verifyRoles(ROLES_LIST.User), cartController.addToCart);
router
  .route("/updateCart")
  .post(verifyRoles(ROLES_LIST.User), cartController.updateCart);

module.exports = router;
