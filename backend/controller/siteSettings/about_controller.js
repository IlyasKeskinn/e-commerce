require('express-async-errors');
const { About } = require("../../models/siteSettings/about");

exports.getAbout = async (req, res) => {
    const about = await About.find();
    res.status(200).json(about);
}

exports.postAbout = async (req, res) => {
    const body = req.body;

    const about = new About(body);

    await about.save();

    res.status(200).json(about);
}

exports.updateAbout = async (req, res) => {
    const aboutId = req.params.id;
    const body = req.body;
    const about = await About.findById(aboutId);

    if (!about) {
        res.status(404).json({ error: "About not found." });
    }

    const updatedAbout = await About.findByIdAndUpdate(aboutId, body, { new: true });

    res.status(200).json(updatedAbout);
}