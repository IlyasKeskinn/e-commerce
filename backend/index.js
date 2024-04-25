const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");

//db
const connectDB = require("./db/dataBase")
connectDB();

//middlewares
app.use(express.json());
app.use(cors(
    {
        "origin": "*",
        "methods": "GET,HEAD,PUT,POST,DELETE",
      }
      
));

//models 


//routes
const productRoutes = require("./router/products");
const categoryRoutes = require("./router/category");
const authRoutes = require("./router/auth");

app.use("/product", productRoutes);
app.use("/category/", categoryRoutes);
app.use("/auth" ,authRoutes);




const port = 3000;
app.listen(port, () => {
    console.log(`listining on port ${port}`);
})

