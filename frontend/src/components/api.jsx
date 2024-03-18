import axios from 'axios';

export const deleteWishlist = async (userId, productId) => {
    try {
        const response = await axios.put(`http://localhost:4000/wishlist/delete/${userId}`, {
            product_id: productId
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting cart:', error);
        throw new Error('Failed to delete cart');
    }
};



