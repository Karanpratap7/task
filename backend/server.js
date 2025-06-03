// Prime Number Checker API
// Node.js Express server

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Function to check if a number is prime
function isPrime(num) {
  // Handle edge cases
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  // Check for divisors from 5 to sqrt(num)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

// API endpoint to check if a number is prime
app.get('/api/prime/:number', (req, res) => {
  const number = parseInt(req.params.number);
  
  // Validate input
  if (isNaN(number)) {
    return res.status(400).json({
      error: 'Invalid input. Please provide a valid number.',
      isPrime: false
    });
  }
  
  const prime = isPrime(number);
  
  res.json({
    number: number,
    isPrime: prime,
    message: prime ? `${number} is a prime number` : `${number} is not a prime number`
  });
});

// Alternative POST endpoint for larger numbers or different input format
app.post('/api/prime', (req, res) => {
  const { number } = req.body;
  
  if (!number || isNaN(parseInt(number))) {
    return res.status(400).json({
      error: 'Invalid input. Please provide a valid number in the request body.',
      isPrime: false
    });
  }
  
  const num = parseInt(number);
  const prime = isPrime(num);
  
  res.json({
    number: num,
    isPrime: prime,
    message: prime ? `${num} is a prime number` : `${num} is not a prime number`
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Prime checker API is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Prime checker API running on http://localhost:${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/api/prime/17`);
});

module.exports = app;