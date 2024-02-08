const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const ROLES_LIST = require("../../roles_list");
const verifyRoles = require("../../verifyRoles");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(verifyRoles(ROLES_LIST.Admin), productController.createNewProduct)
  .post(verifyRoles(ROLES_LIST.Admin), productController.uploadPhoto);

router
  .route("/upload")
  .post(verifyRoles(ROLES_LIST.Admin), productController.uploadPhoto);

router.route("/getProductById").get(productController.getProductById);

module.exports = router;
