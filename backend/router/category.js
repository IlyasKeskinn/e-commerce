const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");


//middlewares

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

router.get("/getCategories", categoryController.getCategories);
router.get("/getCategory/:id", categoryController.getCategory);
router.post("/postCategory",isAuth,isAdmin, categoryController.postCategory);
router.put("/updateCategory/:id", isAuth, isAdmin, categoryController.putUpdateCategory);
router.delete("/deleteCategory/:id", isAuth, isAdmin, categoryController.deleteCategory);

module.exports = router;