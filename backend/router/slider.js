const express = require("express");
const router = express.Router();
const sliderController = require("../controller/slider")

router.get("/getSliders", sliderController.getSliders);
router.get("/getSliderById/:id" , sliderController.getSliderById);
router.post("/postSlider", sliderController.postSlider);
router.put("/updateSlider/:id" , sliderController.putUpdateSlider);
router.delete("/deleteSlider/:id" , sliderController.deleteSlider);




module.exports = router;