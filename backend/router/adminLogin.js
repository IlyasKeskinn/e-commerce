const express = require("express");
const router = express.Router();

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

router.get("/login", isAuth, isAdmin, async (req, res) => {
    try {
        res.status(202).json(req.user);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error });
        }
    }
})


module.exports = router;