const Cart = require("../models/Cart")
const Product = require("../models/Product")


const createCart = async (req, res) => {
    try {
        const userId = req.params.userId;
        const existingCart = await Cart.findOne({ userId });
        console.log(existingCart);

        if (!existingCart) {
            const product_id = req.body.product_id;
            const product = await Product.findById(product_id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found for the given product_Id' });
            } else {
                const productObj = {
                    product_id: product_id,
                    quantity: req.body.quantity
                };
                const newCart = new Cart({
                    userId: userId,
                    products: [productObj]
                });

                await newCart.save();
                res.status(200).json({ message: "Cart successfully created", newCart });
            }
        } else {
            const productIdToFind = req.body.product_id;
            let productFound = false;

            for (let i =  0; i < existingCart.products.length; i++) {
                if (productIdToFind === existingCart.products[i].product_id.toString()) {
                    // Update the quantity of the found product
                    const updatedCart = await Cart.findOneAndUpdate(
                        { userId: userId, "products.product_id": productIdToFind },
                        { $set: { "products.$.quantity": req.body.quantity } },
                        { new: true }
                    );
                    res.status(200).json({ message: "Cart successfully updated", updatedCart });
                    productFound = true;
                    break;
                }
            }

            if (!productFound) {
                const productObj = {
                    product_id: productIdToFind,
                    quantity: req.body.quantity
                };
                const updatedCart = await Cart.findOneAndUpdate(
                    { userId: userId },
                    { $push: { products: productObj } },
                    { new: true }
                );
                res.status(200).json({ message: "new product added successfully in cart", updatedCart });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Some error occurred", error });
    }
};


const getCart = async(req,res) =>{
    try{
        const userId = req.params.userId
        const existingCart = await Cart.findOne({userId : userId}).populate("products.product_id")

        if (!existingCart) {
            return res.status(404).json({ message: 'cart not found' });
        }



        res.status(200).json({ message: 'cart fetched successfully', existingCart});
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Some error occurred' });
    }
    
}

module.exports = {createCart, getCart}
