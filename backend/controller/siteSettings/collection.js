const {DealCollection} = require("../../models/siteSettings/collection");


exports.getDealCollection = async (req, res) => {
    try {
        const dealCollection = await DealCollection.find();

        res.status(200).json(dealCollection);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.postDealCollection = async (req, res) => {
    try {
        const body = req.body;

        const dealCollection = new DealCollection(body);

        await dealCollection.save();

        res.status(200).json(dealCollection);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}

exports.updateDealCollection = async (req, res) => {
    try {
        const dealCollectionId = req.params.id;
        const body = req.body;
        const dealCollection = await DealCollection.findById(dealCollectionId);

        if (!dealCollection) {
            res.status(404).json({ error: "DealCollection not found." });
        }

        const updatedDealCollection = await DealCollection.findByIdAndUpdate(dealCollectionId, body, { new: true });

        res.status(200).json(updatedDealCollection);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}