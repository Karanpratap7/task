# Random Fact Fetcher & Prime Checker

This project contains two parts:
1. **Frontend**: React app that fetches random cat facts
2. **Backend**: Node.js API that checks if numbers are prime

## Frontend Setup (React App)
```bash
cd frontend
npm install
npm start

Prime Number Checker API - Setup Instructions
Prerequisites

Node.js (version 14 or higher)
npm (comes with Node.js)

Setup Steps
1. Create a new directory and navigate to it
bashmkdir prime-checker-api
cd prime-checker-api
2. Initialize npm and install dependencies
bashnpm init -y
npm install express
3. Create the server file
Create a file named server.js and copy the provided code into it.
4. Update package.json
Add the following script to your package.json:
json{
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  }
}
5. Run the server
bashnpm start
The server will start on http://localhost:3000
Testing the API
Method 1: Using curl (command line)
bash# Test with a prime number
curl http://localhost:3000/api/prime/17

# Test with a non-prime number
curl http://localhost:3000/api/prime/20

# Test with POST method
curl -X POST http://localhost:3000/api/prime \
  -H "Content-Type: application/json" \
  -d '{"number": 29}'

# Health check
curl http://localhost:3000/api/health
Method 2: Using a web browser
Navigate to these URLs in your browser:

http://localhost:3000/api/prime/17 (should return true)
http://localhost:3000/api/prime/20 (should return false)
http://localhost:3000/api/health (health check)

Method 3: Using Postman or similar API testing tools

GET http://localhost:3000/api/prime/{number}
POST http://localhost:3000/api/prime with JSON body: {"number": 23}

Expected Responses
Prime number (17):
json{
  "number": 17,
  "isPrime": true,
  "message": "17 is a prime number"
}
Non-prime number (20):
json{
  "number": 20,
  "isPrime": false,
  "message": "20 is not a prime number"
}
Invalid input:
json{
  "error": "Invalid input. Please provide a valid number.",
  "isPrime": false
}
API Endpoints

GET /api/prime/:number - Check if a number is prime (URL parameter)
POST /api/prime - Check if a number is prime (JSON body)
GET /api/health - Health check endpoint

Test Cases to Try

Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
Non-prime numbers: 1, 4, 6, 8, 9, 10, 12, 15, 20, 25, 27
Edge cases: 0, 1, negative numbers
Invalid inputs: letters, special characters