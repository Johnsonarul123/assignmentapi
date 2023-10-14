# Backend API Documentation

This backend API is built using Node.js, Express, and Axios. It fetches user data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API and provides it through a custom endpoint.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Johnsonarul123/assignmentapi.git

   

The server will run at http://localhost:8000.

# API Endpoints
## Fetch User Data
# Endpoint: /api/data
Method: GET
Description: Fetches user data from JSONPlaceholder.
Response Format:
json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Leanne Graham",
      // ... other fields
    },
    // ... other users
  ]
}
Error Response Format:
json
{
  "success": false,
  "error": "Internal Server Error"
}
# Error Handling
If there is an error fetching data from the external API, the server will respond with a 500 Internal Server Error.
CORS Configuration
Cross-Origin Resource Sharing (CORS) is enabled using the cors middleware. This allows the frontend to make requests to this API from a different domain.








   
