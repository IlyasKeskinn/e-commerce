const { mongoose, Schema } = require("mongoose");

const dealCollection = mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    topic: { type: String },
    collection_url: { type: String },
    date: { type: Schema.Types.Date, required: true }
})

const DealCollection = mongoose.model("DealCollection", dealCollection);

module.exports = { DealCollection };