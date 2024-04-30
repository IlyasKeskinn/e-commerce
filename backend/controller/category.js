const mongoose = require("mongoose");
const { Category, validateCategory } = require("../models/category");



exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate("products").populate("subcategory");
        res.status(200).json(categories)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.getCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId).populate("subcategory")
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.postCategory = async (req, res) => {
    const seo_link = slugField(req.body.title);
    const body = { ...req.body, "seo_link": seo_link }

    const { error } = validateCategory(body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }
    const category = new Category(body)
    try {
        await category.save();
        res.status(200).json(category)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.putUpdateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const seo_link = slugField(req.body.title);
    const body = { ...req.body, "seo_link": seo_link }
    
    const { error } = validateCategory(body)

    if (error) {
        res.status(400).json(error.details[0].message);
    }

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, body, {
            new: true
        });
        res.status(200).json(updatedCategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        const deletedCategory = await Category.findOneAndDelete({ "_id": categoryId });
        res.status(200).json(deletedCategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }

    }
}

