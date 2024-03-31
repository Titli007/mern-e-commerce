const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs').promises;
const path = require('path');

// Function to generate random name, price, and description for furniture
function generateRandomFurnitureData() {
  const adjectives = ['Modern', 'Vintage', 'Classic', 'Elegant', 'Rustic', 'Royal','King', 'Queen', 'Fluffy'];
  const nouns = ['Chair', 'Table', 'Sofa', 'Bookcase', 'Bed', 'Mat', 'BeanBag'];
  const category = ['Bedroom', 'Living', 'Dining']

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomName = `${randomAdjective} ${randomNoun}`;
  const randomCategory = category[Math.floor(Math.random() * category.length)]

  const randomPrice = Math.floor(Math.random() * 500) + 50; // Example price range: 50 to 550
  const randomDescription = `A beautiful ${randomAdjective.toLowerCase()} ${randomNoun.toLowerCase()} for your home.`;

  return {
    name: randomName,
    price: randomPrice,
    desc: randomDescription,
    cat: randomCategory
  };
}

// Function to make Axios call for each image file
// Function to make Axios call for each image file
async function uploadImages() {
  const folderPath = path.join(__dirname, 'furnitureImages');
  const files = await fs.readdir(folderPath);

  const response = await axios.get('${import.meta.env.VITE_API_URL}/seller/all');
  const allSeller = response.data;

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const furnitureData = generateRandomFurnitureData();
    const randomSeller = allSeller[Math.floor(Math.random(allSeller.length))];

    try {
      const fileBuffer = await fs.readFile(filePath);

      const formData = new FormData();
      formData.append('name', furnitureData.name);
      formData.append('desc', furnitureData.desc);
      formData.append('category', furnitureData.cat);
      formData.append('price', furnitureData.price);
      formData.append('sellerId', randomSeller._id);
      formData.append('file', fileBuffer, { filename: file });

      const headers = {
        ...formData.getHeaders(),
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Add your authorization token if required
      };

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/create/${randomSeller._id}`, formData, { headers });

        console.log('Product created successfully:', response.data);
      } catch (error) {
        console.error('Error creating product:', error.message);
      }
    } catch (error) {
      console.error('Error reading file:', error.message);
    }
  }
}

// Call the function to upload images
uploadImages();
