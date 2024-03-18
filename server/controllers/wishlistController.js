const User = require("../models/User")
const Product = require("../models/Product")
const Wishlist = require("../models/Wishlist")


const createWishlist = async (req, res) => {
    try {
        const userId = req.params.userId;
        const existingWishlist = await Wishlist.findOne({ userId });
        console.log('wishlist::::',existingWishlist);

        if (!existingWishlist) {
            const product_id = req.body.product_id;
            console.log('productId :::',product_id)
            const product = await Product.findById(product_id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found for the given product_Id' });
            } else {
                const newWishlist = new Wishlist({
                    userId: userId,
                    products : [
                        {
                            product_id: product_id
                        }
                    ]
                    
                });

                await newWishlist.save();
                res.status(200).json({ message: "Wishlist successfully created", newWishlist });
            }
        } else {
            const product_id = req.body.product_id;
            console.log('productId:', product_id);
        
            try {
                const product = await Product.findById(product_id);
                if (!product) {
                    return res.status(404).json({ message: 'Product not found for the given product ID' });
                }
        
                const productInExistingWishlist = await Wishlist.findOne({ "products.product_id": product_id });
                console.log("exisitng product", productInExistingWishlist)
                if (productInExistingWishlist) {
                    console.log("duplicate products trying to enter")
                    return res.status(500).json({ message: 'Product is already in the wishlist' });
                    
                }
        
                existingWishlist.products.push({ product_id });
                await existingWishlist.save();
        
                return res.status(200).json({ message: "Product successfully added to the existing wishlist", existingWishlist });
            } catch (error) {
                console.error('Error adding product to wishlist:', error);
                return res.status(500).json({ message: "Some error occurred while adding product to wishlist" });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Some error occurred", error });
    }
};


const getWishlist = async(req,res) =>{
    try{
        const userId = req.params.userId
        const existingWishlist = await Wishlist.findOne({userId : userId}).populate("products.product_id")

        if (!existingWishlist) {
            return res.status(404).json({ message: 'no wishlist found for this userId' });
        }



        res.status(200).json({ message: 'Wishlist fetched successfully', existingWishlist});
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Some error occurred' });
    }
    
}

const deleteWishlist = async(req,res) => {
    try{
        console.log("api call")
        const userId = req.params.userId
        const product_id = req.body.product_id

        const existingWishlist = await Wishlist.findOne({userId : userId}).populate("products.product_id")
        console.log("exitisting wishlist", existingWishlist)
        if(!existingWishlist){
            res.status(404).json({ error: 'product not found' })
        }

        existingWishlist.products.pull({ product_id });
        await existingWishlist.save();

        

        const populatedWishlist =  await Wishlist.findById(existingWishlist._id).populate("products.product_id");

        console.log("exitisting wishlist", populatedWishlist)


        return res.status(200).json({ message: "Product successfully deleted from the existing wishlist", populatedWishlist });
    } catch (error) {
        console.error('Error adding product to wishlist:', error);
        return res.status(500).json({ message: "Some error occurred while adding product to wishlist" });
    }
}

module.exports = {createWishlist, getWishlist, deleteWishlist}
