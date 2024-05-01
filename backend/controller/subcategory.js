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
    const page = req.query.page || 1;
    const sort = req.query.sort || "DEFAULT";
    const pageSize = 8;
    try {
        let categoryQuery =  Subcategory.findOne({ "seo_link": seo_link }).populate({ path: "maincategory", select: "name seo_link" });

        switch (sort) {
            case "A-Z":
                categoryQuery.populate({ path: "products", options: { sort: { title: 1 } } });
                break;
            case "Z-A":
                categoryQuery.populate({ path: "products", options: { sort: { title: -1 } } });
                break;
            case "LOW-HIGH":
                categoryQuery.populate({ path: "products", options: { sort: { price: 1 } } });
                break;
            case "HIGH-LOW":
                categoryQuery.populate({ path: "products", options: { sort: { price: -1 } } });
                break;
            default:
                categoryQuery.populate({ path: "products" });
                break;
        }

        const category = await categoryQuery.exec();
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }

        const products = category.products;

        const totalProducts = products.length;

        const startIndex = (page - 1) * pageSize;

        const endIndex = (startIndex + pageSize);

        const productsForPage = products.slice(startIndex, endIndex);

        const categoryData = { "name": category.name, "seo_link": category.seo_link, "maincategory": category.maincategory }

        res.status(200).json(
            {
                category: categoryData,
                page: parseInt(page),
                productsForPage: productsForPage,
                totalProducts: totalProducts
            }
        );
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

