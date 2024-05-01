const mongoose = require("mongoose");
const { Subcategory } = require("../models/category");
const slugField = require("../helpers/slugField");

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

exports.getSubcategoryWithSeo = async (req, res) => {
    const seo_link = req.params.seo_link;
    try {
        const category = await Subcategory.findOne({ "seo_link": seo_link }).populate({path: "maincategory" , select :"name seo_link"}).populate("products")
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            res.status(500).json({ error: error.name });
        }
    }
}

exports.post_subcategory = async (req, res) => {

    const seo_link = slugField(req.body.name);
    const body = { ...req.body, "seo_link": seo_link }

    const subcategory = new Subcategory(body)
    try {
        await subcategory.save();
        res.status(200).json(subcategory)
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}

exports.put_Updatesubcategory = async (req, res) => {
    const subcategoryId = req.params.id;
    const seo_link = slugField(req.body.name);
    const body = { ...req.body, "seo_link": seo_link }

    try {
        const subcategory = await Subcategory.findById(subcategoryId);

        if (!subcategory) {
            res.status(404).json({ error: "Subcategory not found" });
        }

        const updatedsubcategory = await Subcategory.findOneAndUpdate({ "_id": subcategoryId }, body, {
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
        const deletedsubcategory = await Subcategory.findOneAndDelete({ "_id": subcategoryId });
        res.status(200).json(deletedsubcategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }

    }
}

