const { About } = require("../../models/siteSettings/about");

exports.getAbout = async (req, res) => {
    try {
        const about = await About.find();

        res.status(200).json(about);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.postAbout = async (req, res) => {
    try {
        const body = req.body;

        const about = new About(body);

        await about.save();

        res.status(200).json(about);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}

exports.updateAbout = async (req, res) => {
    try {
        const aboutId = req.params.id;
        const body = req.body;
        const about = await About.findById(aboutId);

        if (!about) {
            res.status(404).json({ error: "About not found." });
        }

        const updatedAbout = await About.findByIdAndUpdate(aboutId, body, { new: true });

        res.status(200).json(updatedAbout);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}