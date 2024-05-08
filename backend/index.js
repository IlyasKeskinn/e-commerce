const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose")
const cors = require("cors");
const port = (process.env.PORT) || 3000

//db
const connectDB = require("./db/dataBase")
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
const errorMiddlewares = require("./middlewares/errors");


//models 


//routes
const uploadRoutes = require("./middlewares/photoUpload");
const productRoutes = require("./router/products");
const categoryRoutes = require("./router/category");
const authRoutes = require("./router/auth");
const sliderRoutes = require("./router/slider");
const collectionRoutes = require("./router/siteSettings/collection");
const userRoutes = require("./router/user");
const settingsRoutes = require("./router/siteSettings/siteSettings");
const contactRoutes = require("./router/contact");
const paymentRoutes = require("./router/payment");

app.use("/product", productRoutes);
app.use("/category/", categoryRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/settings", settingsRoutes);
app.use("/slider", sliderRoutes);
app.use("/contact/", contactRoutes);
app.use("/collection", collectionRoutes)
app.use("/upload", uploadRoutes);
app.use("/payment", paymentRoutes)
app.use(errorMiddlewares);



app.listen(port, () => {
    console.log(`listining on port ${port}`);
})

