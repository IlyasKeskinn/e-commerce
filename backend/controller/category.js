const mongoose = require("mongoose");
const { Category, validateCategory } = require("../models/category");

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {

    }
}

exports.getCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json("Category not found");
        }
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
    }
}

exports.postCategory = async (req, res) => {
    const { error } = validateCategory(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }
    const category = new Category({
        name: req.body.name,
        products: req.body.products
    })
    try {
        await category.save();
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
    }
}

exports.putUpdateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const updates = req.body
    const { error } = validateCategory(updates)

    if (error) {
        res.status(400).json(error.details[0].message);
    }

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            res.status(404).json("Category not found");
        }

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, {
            new: true
        });
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json("Category not found");
        }
        const deletedCategory = await Category.findOneAndDelete({ "_id": categoryId });
        res.status(200).json(deletedCategory);
    } catch (error) {
        console.log(error);
    }
}