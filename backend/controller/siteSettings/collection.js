require('express-async-errors');
const { DealCollection } = require("../../models/siteSettings/collection");


exports.getDealCollection = async (req, res) => {
    const dealCollection = await DealCollection.find();

    res.status(200).json(dealCollection);
}

exports.postDealCollection = async (req, res) => {
        const body = req.body;

        const dealCollection = new DealCollection(body);

        await dealCollection.save();

        res.status(200).json(dealCollection);
}

exports.updateDealCollection = async (req, res) => {
        const dealCollectionId = req.params.id;
        const body = req.body;
        const dealCollection = await DealCollection.findById(dealCollectionId);

        if (!dealCollection) {
            return res.status(404).json({ error: "DealCollection not found." });
        }

        const updatedDealCollection = await DealCollection.findByIdAndUpdate(dealCollectionId, body, { new: true });

        res.status(200).json(updatedDealCollection);
}