const express = require("express");
const router = express.Router();

const isAuth = require("../../middlewares/isAuth");
const isAdmin = require("../../middlewares/isAdmin");

// about settings

const aboutController = require("../../controller/siteSettings/about_controller");
router.get("/about/getabout", aboutController.getAbout);
router.post("/about/postabout", isAuth, isAdmin, aboutController.postAbout);
router.put("/about/updateabout/:id", isAuth, isAdmin, aboutController.updateAbout);



module.exports = router;