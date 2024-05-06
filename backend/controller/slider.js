const {Slider } = require("../models/slider");

exports.getSliders = async (req, res) => {
    try {
        const sliders = await Slider.find();
        res.status(200).json(sliders);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
}

exports.getSliderById = async (req, res) => {
    try {
        const sliderId = req.params.id;
        const slider = await Slider.findById(sliderId);
        if (!slider) {
            return res.status(404).json({ "error": "Slider not found" });
        }
        res.status(200).json(slider);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ "error": error.message });
        }
    }
}

exports.postSlider = async (req, res) => {
    try {
        const sliderBody = req.body;
        if (!sliderBody) {
            res.status(400).json({ "error": "Please fill the body." });
        }
        const newSlider = new Slider(sliderBody);
        await newSlider.save();
        res.status(200).json({ newSlider });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
}

exports.putUpdateSlider = async (req, res) => {
    try {
        const sliderId = req.params.id;
        const updateBody = req.body;

        const slider = await Slider.findById(sliderId);

        if (!slider) {
            return   res.status(404).json({ "error": "Slider not found!" });
        }
        const updatedSlider = await Slider.findByIdAndUpdate(sliderId, updateBody, { new: true });

        res.status(200).json({ updatedSlider });
    } catch (error) {
        if (error instanceof Error) {
            return  res.status(500).json({ "error": error.message });
        }
    }
}

exports.deleteSlider = async (req, res) => {
    try {
        const sliderId = req.params.id;
        const slider = await Slider.findById(sliderId);

        if (!slider) {
            return  res.status(404).json({ "error": "Slider not found!" })
        }
        const deletedSlider = await Slider.findOneAndDelete({ "_id": sliderId });

        res.status(200).json(deletedSlider);
    } catch (error) {
        if (error instanceof Error) {
            return   res.status(500).json({ "error": error.message });
        }
    }
}