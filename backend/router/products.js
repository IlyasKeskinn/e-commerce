const express = require("express");
const router = express.Router();
const productController = require("../controller/products");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");


router.get("/getProducts", productController.getProducts);
router.get("/getProduct/:id", productController.getProdcutById);
router.get("/getProductBySeo/:seo_link", productController.getProdcutBySeo);

router.post("/postProduct", isAuth, isAdmin, productController.postProduct);
router.put("/updateProduct/:id", isAuth, isAdmin, productController.putUpdateProduct);
router.delete("/deleteProduct/:id", isAuth, isAdmin, productController.deleteProduct)

//product comments

router.put("/getProduct/comment/:id", isAuth, productController.putProductComment);

router.put("/getproduct/comment/update/:id", isAuth, productController.putUpdateProdcutComment)

router.put("/getproduct/removecomment/:id", isAuth, productController.deleteProductComment);


//limited products
router.get("/getlimitedproducts", productController.getLimitedProducts);
router.post("/postlimitedProduct", isAuth, isAdmin, productController.postLimitedProducts);
router.delete("/deleteLimitedProduct/:id", isAuth, isAdmin, productController.deleteLimitedProducts);

module.exports = router;