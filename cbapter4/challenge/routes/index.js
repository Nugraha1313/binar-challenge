const express = require("express");
const router = express.Router();

const product = require("../controller/product");
const component = require("../controller/component");
const supplier = require("../controller/supplier");

router.get("/", (req, res) =>
  res.status(200).json({
    message: "welcome to the api",
  })
);

// products
router.get("/products", product.index); //get all
router.get("/products/:product_id", product.show); //get detail
router.post("/products", product.store); //create
router.put("/products/:product_id", product.update); //update
router.delete("/products/:product_id", product.destroy); //delete

// components
router.get("/components", component.index); //get all
router.get("/components/:component_id", component.show); //get detail
router.post("/components", component.store); //create
router.put("/components/:component_id", component.update); //update
router.delete("/components/:component_id", component.destroy); //delete

// suppliers
router.get("/suppliers", supplier.index); //get all
router.get("/suppliers/:supplier_id", supplier.show); //get detail
router.post("/suppliers", supplier.store); //create
router.put("/suppliers/:supplier_id", supplier.update); //update
router.delete("/suppliers/:supplier_id", supplier.destroy); //delete

module.exports = router;
