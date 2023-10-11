// Import necessary modules
const express = require('express');
const axios = require('axios');

// Create an Express app
const app = express();
const port = 3000;

// Define a route to serve the frontend (Assuming frontend files are in the 'public' folder)
app.use(express.static('public'));

// Define a route to fetch data from a public API
app.get('/api/data', async (req, res) => {
  try {
    // Make a request to a public API (Replace 'API_ENDPOINT' with the actual API endpoint)
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    // Extract relevant data from the API response (Modify as needed)
    const apiData = response.data;

    // Format and send the data to the frontend
    res.json({ success: true, data: apiData });
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Define a default route for other requests
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
