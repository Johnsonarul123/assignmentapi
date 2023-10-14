const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Imported cors middleware

// Create an Express app
const app = express();
const port = 8000;



app.use(cors());

// Define a route to fetch data from a public API
app.get('/api/data', async (req, res) => {
  try {
   
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    // Extracting relevant data from the API response 
    const apiData = response.data;

   
    res.json({ success: true, data: apiData });
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// route
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
