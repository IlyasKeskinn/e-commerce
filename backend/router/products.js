const express = require("express");
const router = express.Router();
const productController = require("../controller/products");


router.get("/getProducts" , productController.getProducts );
router.get("/getProducts/:id" ,productController.getProdcutById);

router.post("/postProduct",productController.postProduct);
router.put("/updateProduct/:id",productController.putUpdateProduct);
router.delete("/deleteProduct/:id" ,productController.deleteProduct)

//product comments

router.put("/getProducts/comment/:id", productController.putProductComment);

router.put("/getproduct/comment/update/:id", productController.putUpdateProdcutComment)

router.delete("/getproduct/removecomment/:id", productController.deleteProductComment);

module.exports = router;