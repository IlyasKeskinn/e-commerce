const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGOOSE_URI = (process.env.MONGOOSE_URI)
const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGOOSE_URI)
        console.log("Succesful connect to mongoDb");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongoDB