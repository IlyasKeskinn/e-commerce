require('express-async-errors');
const { ContactMsg } = require("../models/contactMsg")

exports.getContactMsg = async (req, res) => {
    const contactMsg = await ContactMsg.find();

    res.status(200).json(contactMsg);
}

exports.getContactById = async (req, res) => {
    const contactId = req.params.id;
    const contact = await ContactMsg.findById(contactId);
    if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
}

exports.postContactMsg = async (req, res) => {
    const body = req.body;

    const contactMsg = new ContactMsg(body);

    await contactMsg.save();

    res.status(200).json(contactMsg);
}

exports.updateContactMsg = async (req, res) => {
    const contactMsgId = req.params.id;
    const body = req.body;
    const contactMsg = await ContactMsg.findById(contactMsgId);

    if (!contactMsg) {
        return res.status(404).json({ error: "ContactMsg not found." });
    }

    const updatedContactMsg = await ContactMsg.findByIdAndUpdate(contactMsgId, body, { new: true });

    res.status(200).json(updatedContactMsg);
}