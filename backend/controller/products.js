const { Product, validateProduct } = require("../models/product");
const { mongoose } = require("mongoose");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}


exports.getProdcutById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json("Product not found");
        }
        res.status(201).json(product);
    } catch (error) {
        console.log(error);
    }
}
exports.postProduct = async (req, res) => {
    const { error } = validateProduct(req.body);

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    const product = new Product(req.body)
    try {
        await product.save();
        return res.json(product);
    } catch (error) {
        console.log(error);
    }
}

exports.putUpdateProduct = async (req, res) => {
    const productId = req.params.id
    try {

        const selectedProduct = await Product.findById(productId);
        if (!selectedProduct) {
            res.status(404).json("Product not found");
        }

        const { error } = validateProduct(req.body);

        if (error) {
            res.status(400).json(error.details[0].message);
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const deletedItem = await Product.findOneAndDelete({ "_id": req.params.id });
        res.json(deletedItem);
    } catch (error) {
        console.log(error);
    }
}
