const express = require("express");
const router = express.Router();
const sliderController = require("../controller/slider");

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

router.get("/getSliders", sliderController.getSliders);
router.get("/getSliderById/:id", sliderController.getSliderById);
router.post("/postSlider", isAuth, isAdmin, sliderController.postSlider);
router.put("/updateSlider/:id", isAuth, isAdmin, sliderController.putUpdateSlider);
router.delete("/deleteSlider/:id", isAuth, isAdmin, sliderController.deleteSlider);




module.exports = router;