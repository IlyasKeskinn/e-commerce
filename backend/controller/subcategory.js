const mongoose = require("mongoose");
const { Subcategory } = require("../models/category");

exports.get_subcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.find().populate("products");
        res.status(200).json(subcategories)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.get_subcategory = async (req, res) => {
    const subcategoryId = req.params.id;
    try {
        const subcategory = await Subcategory.findById(subcategoryId);
        if (!subcategory) {
            res.status(404).json({ error: "Subcategory not found" });
        }
        res.status(200).json(subcategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.post_subcategory = async (req, res) => {
  
    const subcategory = new Subcategory({
        name: req.body.name,
        products: req.body.products
    })
    try {
        await subcategory.save();
        res.status(200).json(subcategory)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.put_Updatesubcategory = async (req, res) => {
    const subcategoryId = req.params.id;
    const updates = req.body

    try {
        const subcategory = await Subcategory.findById(subcategoryId);

        if (!subcategory) {
            res.status(404).json({ error: "Subcategory not found" });
        }

        const updatedsubcategory = await subcategory.findByIdAndUpdate(subcategoryId, updates, {
            new: true
        });
        res.status(200).json(updatedsubcategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.delete_subcategory = async (req, res) => {
    const subcategoryId = req.params.id;
    try {
        const subcategory = await Subcategory.findById(subcategoryId);
        if (!subcategory) {
            res.status(404).json({ error: "Subcategory not found" });
        }
        const deletedsubcategory = await subcategory.findOneAndDelete({ "_id": subcategoryId });
        res.status(200).json(deletedsubcategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }

    }
}

