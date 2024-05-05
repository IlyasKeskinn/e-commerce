const express = require("express");
const router = express.Router();
const collectionController = require("../../controller/siteSettings/collection");

//deal collectioon
router.get("/get_deal_collection", collectionController.getDealCollection );
router.post("/post_deal_collection", collectionController.postDealCollection);
router.put("/update_deal_collection/:id", collectionController.updateDealCollection);


module.exports = router;