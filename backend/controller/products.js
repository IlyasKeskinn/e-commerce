const { Product, Comment, validateProduct } = require("../models/product");
const { mongoose } = require("mongoose");
const { Subcategory } = require("../models/category");
const deleteOldImages = require("../helpers/deletePhoto");
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}


exports.getProdcutById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId).populate({path : "categories", select : "name"}).populate({path : "subcategories", select :"name"})
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        }
        res.status(201).json(product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}
exports.postProduct = async (req, res) => {


    const { error } = validateProduct(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const product = new Product(req.body)
        await product.save();

        return res.json(product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.putUpdateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const selectedProduct = await Product.findById(productId);
        if (!selectedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        const { error } = validateProduct(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const updatedProduct = await Product.findOneAndUpdate({ _id: productId }, req.body, { new: true });
        deleteOldImages(req.body.deletedImagePaths);

        return res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
    }
}


exports.deleteProduct = async (req, res) => {

    try {
        const deletedItem = await Product.findOneAndDelete({ "_id": req.params.id });
        res.json(deletedItem);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}


//product comments

exports.putProductComment = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const comment = new Comment(req.body);

        product.reviews.push(comment);

        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}

exports.deleteProductComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body.id;
    try {
        const product = await Product.findById(productId);
        if (!productId) {
            return res.status(404).json({ error: "Product not found" });
        }
        const comment = product.reviews.id(commentId);

        const commentIndex = product.reviews.indexOf(comment);

        product.reviews.splice(commentIndex, 1);

        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}

exports.putUpdateProdcutComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body.id;
    const updates = req.body;
    try {
        const product = await Product.findById(productId);
        if (!productId) {
            return res.status(404).json({ error: "Product not found" });
        }
        const comment = product.reviews.id(commentId);

        const commentIndex = product.reviews.indexOf(comment);

        product.reviews.splice(commentIndex, 1, updates);

        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}


