// const express = require("express");
// const multer = require('multer');
// const cors = require("cors");

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });



// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const sellerRoutes = require("./routes/sellerRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// const connectDB = require("./db/db");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Use upload.any() to handle all types of fields (files and JSON data)
// app.use(upload.any());

// app.use(userRoutes);
// app.use(productRoutes);
// app.use(sellerRoutes);
// app.use(cartRoutes);

// connectDB();

// const port = 4000;

// app.post('/upload', upload.single('file'), (req, res) => {
//     // Access the uploaded file through req.file
//     console.log('Received file upload request');
//     console.log('Headers:', req.headers);
//     console.log('File:', req.file);
//     const file = req.file;

//     // Process the file or perform any other necessary actions
//     // ...

//     res.json({ message: 'File uploaded successfully', file });
// });

// app.listen(port, () => {
//     console.log("App is listening on port:", port);
// });



const express = require('express');
const cors = require("cors");
const multer = require('multer');

const app = express();
const port = 4000;


app.use(cors());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const cartRoutes = require("./routes/cartRoutes");

const connectDB = require("./db/db");

app.use(express.json());
// app.use(cors());

// Use upload.any() to handle all types of fields (files and JSON data)
app.use(upload.single('file'));

app.use(userRoutes);
app.use(productRoutes);
app.use(sellerRoutes);
app.use(cartRoutes);

connectDB();


// app.post('/upload', (req, res) => {
//   // Access the uploaded file through req.file
//   const file = req.file;

//   // Process the file or perform any other necessary actions
//   // ...
//   console.log('File:', req.file);
//   res.json({ message: 'File uploaded successfully' });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




