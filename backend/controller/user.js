require('express-async-errors');
const { User, Address } = require("../models/user")

exports.getUserAllAddress = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ "error": "User not found!" });
    }

    res.status(200).json(user.user_address);
}
exports.getUserAddressById = async (req, res) => {
    const userId = req.params.id;
    const addressId = req.query.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ "error": "User not found!" });
    }
    const address = user.user_address.id(addressId);

    res.status(200).json(address);
}

exports.postAddress = async (req, res) => {
    const userId = req.params.id;
    const addressBody = req.body;
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ "error": "User not found" })
    }
    const address = await new Address(addressBody);
    user.user_address.push(address);

    const userAddress = await user.save();
    res.status(200).json(userAddress.user_address);
}

exports.putAddress = async (req, res) => {
    const userId = req.params.id;
    const addressId = req.body.id;
    const updates = req.body;
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ "error": "User not found!" })
    }

    const address = user.user_address.id(addressId);

    const addressIndex = user.user_address.indexOf(address);

    user.user_address.splice(addressIndex, 1, updates);

    const updatedAddress = await user.save();

    res.status(200).json(updatedAddress.user_address);
}


exports.deleteAddress = async (req, res) => {
    const userId = req.params.id;
    const addressId = req.body.id;

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ "error": "User not found!" })
    }

    const address = user.user_address.id(addressId);
    const addressIndex = user.user_address.indexOf(address);

    user.user_address.splice(addressIndex, 1);

    const updatedUser = await user.save();

    res.status(200).json(updatedUser.user_address);
}