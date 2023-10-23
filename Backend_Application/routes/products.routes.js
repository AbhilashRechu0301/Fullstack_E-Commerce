var express = require("express");
var ProductRouter = express.Router();
var ProductController = require("../controller/products.controller");

ProductRouter.post("/addProduct", ProductController.addProduct);
ProductRouter.get("/Products", ProductController.getAllProducts);
ProductRouter.put("/update/:id", ProductController.updateProduct);
ProductRouter.delete("/delete/:id", ProductController.deleteProduct);
ProductRouter.get("/:id", ProductController.singleProduct);

module.exports = ProductRouter;
