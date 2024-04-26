const express = require("express");
const router = express.Router();
const upload = require("../helpers/imageUpload");

router.post("/photo", upload.upload.array("files"), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json("No files uploaded");
        }
        const images = req.files.map(file => file.filename);
        res.status(200).json(images);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
})

module.exports = router;