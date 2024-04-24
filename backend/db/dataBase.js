const mongoose = require("mongoose");
const secretKeys = require("../config");
const connectMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${secretKeys.dbUserName}:${secretKeys.dbPassword}@cluster0.detvns3.mongodb.net/${secretKeys.dataBase}?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Succesful connect to mongoDb");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongoDB