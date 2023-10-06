const express = require("express");
const {getProducts, getProductsId, CreateProduct, EditProduct, DeleteProduct} = require("../controllers/productController.js");
const router = require("express").Router();


router.route("/").get(getProducts);
router.route("/:id").get(getProductsId);
router.route("/").post(CreateProduct);
router.route("/:id").put(EditProduct);
router.route("/:id").delete(DeleteProduct);


module.exports = router;