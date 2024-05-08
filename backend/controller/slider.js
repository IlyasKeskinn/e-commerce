require('express-async-errors');
const { Slider } = require("../models/slider");

exports.getSliders = async (req, res) => {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
}

exports.getSliderById = async (req, res) => {
    const sliderId = req.params.id;
    const slider = await Slider.findById(sliderId);
    if (!slider) {
        return res.status(404).json({ "error": "Slider not found" });
    }
    res.status(200).json(slider);
}

exports.postSlider = async (req, res) => {
    const sliderBody = req.body;
    if (!sliderBody) {
        res.status(400).json({ "error": "Please fill the body." });
    }
    const newSlider = new Slider(sliderBody);
    await newSlider.save();
    res.status(200).json({ newSlider });
}

exports.putUpdateSlider = async (req, res) => {
    const sliderId = req.params.id;
    const updateBody = req.body;

    const slider = await Slider.findById(sliderId);

    if (!slider) {
        return res.status(404).json({ "error": "Slider not found!" });
    }
    const updatedSlider = await Slider.findByIdAndUpdate(sliderId, updateBody, { new: true });

    res.status(200).json({ updatedSlider });
}

exports.deleteSlider = async (req, res) => {
    const sliderId = req.params.id;
    const slider = await Slider.findById(sliderId);

    if (!slider) {
        return res.status(404).json({ "error": "Slider not found!" })
    }
    const deletedSlider = await Slider.findOneAndDelete({ "_id": sliderId });

    res.status(200).json(deletedSlider);
}