const axios = require('axios');

// Function to generate random user data
function generateRandomUserData(index) {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
  const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'emma@example.com', 'frank@example.com', 'grace@example.com', 'henry@example.com', 'ivy@example.com', 'jack@example.com'];

  const randomName = names[index % names.length];
  const randomEmail = emails[index % emails.length];
  const randomPassword = `password${index}`;

  return {
    name: randomName,
    email: randomEmail,
    password: randomPassword,
  };
}

// Function to make Axios call to create a user
async function createUserWithAxios(userData) {
  try {
    const response = await axios.post('${import.meta.env.VITE_API_URL}/user/signin', userData);
    console.log('User created successfully:', response.data);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

// Generate and create 10 random users
const numberOfUsers = 10;

async function test() {
    for (let i = 0; i < numberOfUsers; i++) {
      const randomUserData = generateRandomUserData(i);
      await createUserWithAxios(randomUserData);
    }

}

test()
