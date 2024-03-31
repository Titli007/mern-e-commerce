const axios = require('axios');

// Function to generate random shop name
function generateRandomShopName(index) {
  const shopNames = ['Super Mart', 'Furniture Emporium', 'Electronics World', 'Fashion Haven', 'Home Decor Plus', 'Tech Zone', 'Book Paradise', 'Pet Store', 'Garden Oasis', 'Sports Haven'];

  return shopNames[index % shopNames.length];
}

let allUser = []
async function fetchUserData() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/all`);
    allUser = response.data
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    return null;
  }
}

// Function to create a seller with Axios
async function createSellerWithAxios(userId, shopName) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/seller/create/${userId}`, { shop_name: shopName });
    console.log('Seller created successfully:', response.data);
  } catch (error) {
    console.error('Error creating seller:', error.message);
  }
}

// Generate and create 10 random sellers
const numberOfSellers = 10;

async function runner () {
    await fetchUserData()
    for (let i = 0; i < numberOfSellers; i++) {
      const randomShopName = generateRandomShopName(i);
      

      const userData = allUser[i]
    
      if (userData) {
        await createSellerWithAxios(userData._id, randomShopName);
      } else {
        console.error('User data not available for user ID:', userData);
      }
    }

}


runner()
