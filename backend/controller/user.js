const mongoose = require("mongoose");
const { User, Address } = require("../models")

exports.postAddress = async (req, res) => {
    try {
        const userId = req.params.id;
        const addressBody = req.body;

        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ "error": "User not found" })
        }

        const address = new Address(addressBody);

        user.address.push(address);

        const userAddress = await user.save();
        res.status(200).json(userAddress);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
}

exports.putAddress = async (req, res) => {
    try {
        const userId = req.params.id;
        const addressId = req.body.id;
        const updates = req.body;
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ "error": "User not found!" })
        }

        const address = user.address.id(addressId);

        const addressIndex = user.address.indexOf(address);

        user.address.splice(addressIndex, 1, updates);

        const updatedAddress = await user.save();

        res.status(200).json(updatedAddress);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
}


exports.deleteAddress = async (req, res) => {
    try {
        const userId = req.params.id;
        const addressId = req.body.id;

        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ "error": "User not found!" })
        }

        const address = user.address.id(addressId);
        const addressIndex = user.address.indexOf(address);

        user.address.splice(addressIndex, 1);

        const updatedUser = await user.save();

        res.status(200).json(updatedUser);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message })
        }
    }
}