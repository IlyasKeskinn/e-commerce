const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");


//middlewares

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");


//main category
router.get("/getCategories", categoryController.getCategories);
router.get("/getCategory/:id", categoryController.getCategory);
router.post("/postCategory",isAuth,isAdmin, categoryController.postCategory);
router.put("/updateCategory/:id", isAuth, isAdmin, categoryController.putUpdateCategory);
router.delete("/deleteCategory/:id", isAuth, isAdmin, categoryController.deleteCategory);

//subcategory 

router.put("/getCategories/subcategory/:id", categoryController.putSubCategory);
router.delete("/getcateories/subcategory/remove/:id", categoryController.deleteSubCategory);
router.put("/getcategories/subcategory/update/:id", categoryController.putUpdateSubCategory);
router.post("/getsubcategory/:id" ,categoryController.getSubcategory);


module.exports = router;