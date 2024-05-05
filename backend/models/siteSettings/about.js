const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
    title: { type: String, required: true },
    story: { type: String, required: true },
    mision: { type: String, required: true },
    vision: { type: String, required: true },
    the_company: { type: String, required: true }
})

const About = mongoose.model("About", aboutSchema);


module.exports = { About };