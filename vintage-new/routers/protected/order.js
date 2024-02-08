const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/orderController");
const ROLES_LIST = require("../../roles_list");
const verifyRoles = require("../../verifyRoles");

router
  .route("/")
  .get(verifyRoles(ROLES_LIST.Admin), orderController.getAllOrders)
  .post(verifyRoles(ROLES_LIST.User), orderController.placeOrder)
  .post(verifyRoles(ROLES_LIST.Admin), orderController.getAllOrders);
router
  .route("/get-all-orders")
  .post(verifyRoles(ROLES_LIST.Admin), orderController.getAllOrders);
router
  .route("/update-order-status")
  .post(verifyRoles(ROLES_LIST.Admin), orderController.updateOrderStatus);

module.exports = router;
