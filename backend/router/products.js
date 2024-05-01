const express = require("express");
const router = express.Router();
const productController = require("../controller/products");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");


router.get("/getProducts" , productController.getProducts );
router.get("/getProduct/:id" ,productController.getProdcutById);
router.get("/getProductBySeo/:seo_link" ,productController.getProdcutBySeo);

router.post("/postProduct",isAuth,isAdmin, productController.postProduct);
router.put("/updateProduct/:id", isAuth,isAdmin,productController.putUpdateProduct);
router.delete("/deleteProduct/:id" ,isAuth,isAdmin ,productController.deleteProduct)

//product comments

router.put("/getProducts/comment/:id", productController.putProductComment);

router.put("/getproduct/comment/update/:id", productController.putUpdateProdcutComment)

router.delete("/getproduct/removecomment/:id", productController.deleteProductComment);

module.exports = router;