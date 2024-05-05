const { ContactMsg } = require("../models/contactMsg")

exports.getContactMsg = async (req, res) => {
    try {
        const contactMsg = await ContactMsg.find();

        res.status(200).json(contactMsg);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.getContactById = async (req, res) => {
    try {
        const contactId = req.params.id;
        const contact = await ContactMsg.findById(contactId);
        if (!contact) {
            res.status(404).json({ error: "Contact not found" });
        }
        res.status(200).json(contact);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}

exports.postContactMsg = async (req, res) => {
    try {
        const body = req.body;

        const contactMsg = new ContactMsg(body);

        await contactMsg.save();

        res.status(200).json(contactMsg);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}

exports.updateContactMsg = async (req, res) => {
    try {
        const contactMsgId = req.params.id;
        const body = req.body;
        const contactMsg = await ContactMsg.findById(contactMsgId);

        if (!contactMsg) {
            res.status(404).json({ error: "ContactMsg not found." });
        }

        const updatedContactMsg = await ContactMsg.findByIdAndUpdate(contactMsgId, body, { new: true });

        res.status(200).json(updatedContactMsg);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}