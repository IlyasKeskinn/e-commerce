const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");

router.get("/getCategories", categoryController.getCategories);
router.get("/getCategory/:id", categoryController.getCategory);
router.post("/postCategory", categoryController.postCategory);
router.put("/updateCategory/:id", categoryController.putUpdateCategory);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router;