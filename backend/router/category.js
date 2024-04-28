const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");
const subcategoryController = require("../controller/subcategory");


//middlewares

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");


//main category
router.get("/getCategories", categoryController.getCategories);
router.get("/getCategory/:id", categoryController.getCategory);
router.post("/postCategory", isAuth, isAdmin, categoryController.postCategory);
router.put("/updateCategory/:id", isAuth, isAdmin, categoryController.putUpdateCategory);
router.delete("/deleteCategory/:id", isAuth, isAdmin, categoryController.deleteCategory);

//subcategory 

router.post("/post_subcategory", subcategoryController.post_subcategory);
router.delete("/delete_subcategory/:id", subcategoryController.delete_subcategory);
router.put("/update_subcategory/:id", subcategoryController.put_Updatesubcategory);
router.get("/get_subcategories", subcategoryController.get_subcategories);
router.get("/get_subcategory/:id", subcategoryController.get_subcategory);




module.exports = router;