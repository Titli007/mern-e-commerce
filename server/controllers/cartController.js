const Cart = require("../models/Cart")
const Product = require("../models/Product")


const createCart = async (req, res) => {
    try {
        const userId = req.params.userId;
        const existingCart = await Cart.findOne({ userId });
                
        

        if (!existingCart) {
            const product_id = req.body.product_id;
            const quantity= req.body.quantity
            const product = await Product.findById(product_id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found for the given product_Id' });
            } else {
                const productObj = {
                    product_id: product_id,
                    quantity: quantity
                };
                const newCart = new Cart({
                    userId: userId,
                    products: [productObj]
                });

                await newCart.save();

                const populatedCart = await Cart.findById(newCart._id).populate("products.product_id");

                console.log("after created" , populatedCart)

                res.status(200).json({ message: "Cart successfully created", populatedCart });
            }
        } else {
            const productIdToFind = req.body.product_id;
            let quantity = req.body.quantity;
            let productFound = false;

            console.log("working in else before any logic")
            for (let i =  0; i < existingCart.products.length; i++) {
                if (productIdToFind === existingCart.products[i].product_id.toString()) {
                    // Update the quantity of the found product
                    console.log("working inside loop nad if")
                    if(!quantity) {
                        const updatedCart = await Cart.findOneAndUpdate(
                            { userId: userId, "products.product_id": productIdToFind },
                            { $inc: { "products.$.quantity": 1 } },
                            { new: true }
                        )
                        await updatedCart.save()
                        console.log("working inside undefined quantityu")

                        const populatedCart = await Cart.findById(updatedCart._id).populate("products.product_id");

                        res.status(200).json({ message: "quantity updated", populatedCart });
                        return
                    }
                    const updatedCart = await Cart.findOneAndUpdate(
                        { userId: userId, "products.product_id": productIdToFind },
                        { $set: { "products.$.quantity": quantity } },
                        { new: true }
                    )

                    const populatedCart = await Cart.findById(updatedCart._id).populate("products.product_id");

                    // console.log("after quantity update" , populatedCart)

                    res.status(200).json({ message: "Cart successfully updated", populatedCart });
                    productFound = true;
                    break;
                }
            }
            console.log(productFound)

            if (!productFound) {
                console.log("inside last if")
                const productObj = {
                    product_id: productIdToFind,
                    quantity: req.body.quantity
                };
                const updatedCart = await Cart.findOneAndUpdate(
                    { userId: userId },
                    { $push: { products: [productObj] } },
                    { new: true }
                );
                console.log("working at last")
                const populatedCart = await Cart.findById(updatedCart._id).populate("products.product_id");
                // console.log("after push new product" , populatedCart)
                res.status(200).json({ message: "new product added successfully in cart", populatedCart });
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

const deleteCart = async (req, res) => {
    try {
        const userId = req.params.userId; // Assuming userId is passed in the request body
        const productIdToFind = req.body.product_id;
        const existingCart = await Cart.findOne({ userId });

        if (!existingCart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        let productFound = false;

        for (let i = 0; i < existingCart.products.length; i++) {
            if (productIdToFind === existingCart.products[i].product_id.toString()) {
                // Delete the product from the cart
                const updatedCart = await Cart.findOneAndUpdate(
                    { userId: userId },
                    { $pull: { products: { product_id: productIdToFind } } },
                    { new: true }
                );

                productFound = true;

                const populatedCart = await Cart.findById(updatedCart._id).populate("products.product_id");
                console.log("after delete product" , populatedCart)

                return res.status(200).json({ message: "Product successfully deleted from the cart", populatedCart });
            }
        }

        if (!productFound) {
            return res.status(404).json({ error: "Product not found in the cart" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Some error occurred' });
    }
}


module.exports = {createCart, getCart, deleteCart}
