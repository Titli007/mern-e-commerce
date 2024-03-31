const express = require('express');
const cors = require("cors");
const multer = require('multer');
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const connectDB = require("./db/db");

app.use(express.json());
app.use(cookieParser())


// Use upload.any() to handle all types of fields (files and JSON data)
app.use(upload.single('file'));

app.use(userRoutes);
app.use(productRoutes);
app.use(sellerRoutes);
app.use(cartRoutes);
app.use(wishlistRoutes);

connectDB();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




