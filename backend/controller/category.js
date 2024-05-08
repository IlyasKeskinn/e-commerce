require('express-async-errors');
const { Category, validateCategory, Subcategory } = require("../models/category");
const slugField = require("../helpers/slugField");


exports.getCategories = async (req, res) => {
    const categories = await Category.find().populate("subcategory");
    res.status(200).json(categories)
}

exports.getCategory = async (req, res) => {
    const id = req.params.id;
    const category = await Category.findById(id).populate({ path: "subcategory" });
    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
}

exports.getCategoryWithSeo = async (req, res) => {
    const seo_link = req.params.seo_link;
    const page = req.query.page || 1;
    const sort = req.query.sort || "DEFAULT";
    const pageSize = 8;

    let categoryQuery = Category.findOne({ "seo_link": seo_link }).populate({ path: "subcategory", select: "name seo_link" });

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
        return res.status(404).json({ error: "Category not found" });
    }
    const categoryData = { "name": category.name, "seo_link": category.seo_link, "subcategory": category.subcategory }

    const products = category.products;
    const docs = products.length;

    const startIndex = (page - 1) * pageSize

    const endIndex = (startIndex + pageSize);

    const productForPage = products.slice(startIndex, endIndex);

    res.status(200).json(
        {
            category: categoryData,
            page: parseInt(page),
            productsForPage: productForPage,
            totalProducts: docs
        }
    );
}



exports.postCategory = async (req, res) => {
    const seo_link = slugField(req.body.name);
    const body = { ...req.body, "seo_link": seo_link }

    const { error } = validateCategory(body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const category = new Category(body)

    await category.save();
    res.status(200).json(category)
}

exports.putUpdateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const seo_link = slugField(req.body.name);
    const body = { ...req.body, "seo_link": seo_link }

    const { error } = validateCategory(body)

    if (error) {
        res.status(400).json(error.details[0].message);
    }

    const category = await Category.findById(categoryId);

    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(categoryId, body, {
        new: true
    });
    res.status(200).json(updatedCategory);
}

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    const category = await Category.findById(categoryId);
    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }
    const deletedCategory = await Category.findOneAndDelete({ "_id": categoryId });
    res.status(200).json(deletedCategory);
}

