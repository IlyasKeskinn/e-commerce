const express = require("express");
const router = express.Router();
const collectionController = require("../../controller/siteSettings/collection");

const isAuth = require("../../middlewares/isAuth");
const isAdmin = require("../../middlewares/isAdmin");

//deal collectioon
router.get("/get_deal_collection", collectionController.getDealCollection );
router.post("/post_deal_collection",isAuth, isAdmin, collectionController.postDealCollection);
router.put("/update_deal_collection/:id",isAuth, isAdmin, collectionController.updateDealCollection);


module.exports = router;