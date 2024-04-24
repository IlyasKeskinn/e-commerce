const express = require("express");
const app = express();
const mongoose = require("mongoose")

//db
const connectDB = require("./db/dataBase")
connectDB();

//middlewares

app.use(express.json());

//models 


//routes
const productRoutes = require("./router/products");
const categoryRoutes = require("./router/category");

app.use("/api/product", productRoutes);
app.use("/api/category/", categoryRoutes);




const port = 3000;
app.listen(port, () => {
    console.log(`listining on port ${port}`);
})

