const Product = require("../models/Product")
const Seller =  require("../models/Seller")
const axios = require("axios")

const createProduct = async (req, res) => {
    try {
      const name = req.body.name;
      const desc = req.body.desc;
      const category = req.body.category;
      const price = req.body.price;
      const sellerId = req.params.sellerId;
      const file = req.file
  
      const seller = await Seller.findById(sellerId).select("shop_name");
  
      if (!seller) {
        return res.status(404).json({ message: 'Seller not found for the given user ID' });
      }

      const body = {
        image: file.buffer.toString('base64'), // Convert the file buffer to a base64-encoded string
        type: 'base64'
        };

        const headers = {
            Authorization: `Client-ID f9dd1a04f9845da`, 
        };

        try {
            const res = await axios.post('https://api.imgur.com/3/image', body, { headers });
            imageUrl = res.data.data.link
            console.log(imageUrl)
        } catch (error) {
            console.log(error)
            return res.status(501).json({ message: 'File Upload Error' });
        }
  
      
      const newProduct = new Product({
        name: name,
        desc: desc,
        imageUrl: imageUrl,
        category: category,
        shop_name: seller.shop_name,
        price: price,
      });
  
      await newProduct.save();
  
      res.status(200).json({ message: 'Product created successfully', newProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Some error occurred', details: error.message });
    }
  };
  


const updateProductPrice =async(req,res) =>{
    try{
        const price = req.body.price
        const productId = req.params.productId;

        const existingProduct = await Product.findByIdAndUpdate(
            productId,
            {
                price: price
            },
            { new: true }
        );
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'product updated successfully', existingProduct});
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"some error occured"})
    }
};

const deleteProduct=async(req,res)=>{
    try{

        const productId = req.params.productId;

        const existingProduct = await Product.findByIdAndDelete(productId);
        
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'product deleted successfully'});

    }catch(error){
        console.log(error)
        res.status(500).json({error:"some error occured"})
    }
}

const getProduct = async (req, res) => {
    try {
        const category = req.query.category;

        let existingProducts;

        if (category) {
            existingProducts = await Product.find({ category: category });
        } else {
            existingProducts = await Product.find();
        }

        if (!existingProducts || existingProducts.length === 0) {
            return res.status(404).json({ message: 'No products found for the specified category' });
        }

        res.status(200).json({ message: 'Products fetched successfully', products: existingProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

const getSingleProduct = async(req,res)=>{
    try{
        const productId = req.params.productId

        const existingProduct = await Product.findById(productId)

        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'product fetched successfully', existingProduct});
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Some error occurred' });
    }
}

module.exports = {
    createProduct, updateProductPrice, deleteProduct, getProduct, getSingleProduct}