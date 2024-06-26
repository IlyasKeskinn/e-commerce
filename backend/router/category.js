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
router.get("/get_category_with_seo/:seo_link", categoryController.getCategoryWithSeo);

router.post("/postCategory", isAuth, isAdmin, categoryController.postCategory);
router.put("/updateCategory/:id", isAuth, isAdmin, categoryController.putUpdateCategory);
router.delete("/deleteCategory/:id", isAuth, isAdmin, categoryController.deleteCategory);

//subcategory 

router.get("/get_subcategories", subcategoryController.get_subcategories);
router.get("/get_subcategory/:id", subcategoryController.get_subcategory);
router.get("/get_subcategory_withSeo/:seo_link", subcategoryController.getSubcategoryWithSeo);

router.post("/post_subcategory",isAuth, isAdmin, subcategoryController.post_subcategory);
router.delete("/delete_subcategory/:id",isAuth, isAdmin, subcategoryController.delete_subcategory);
router.put("/update_subcategory/:id",isAuth, isAdmin, subcategoryController.put_Updatesubcategory);





module.exports = router;