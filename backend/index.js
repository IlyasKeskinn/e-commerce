const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");

//db
const connectDB = require("./db/dataBase")
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//models 


//routes
const uploadRoutes = require("./middlewares/photoUpload");
const productRoutes = require("./router/products");
const categoryRoutes = require("./router/category");
const authRoutes = require("./router/auth");
const sliderRoutes = require("./router/slider");

app.use("/product", productRoutes);
app.use("/category/", categoryRoutes);
app.use("/auth", authRoutes);
app.use("/slider", sliderRoutes);
app.use("/upload", uploadRoutes);



const port = 3000;
app.listen(port, () => {
    console.log(`listining on port ${port}`);
})

