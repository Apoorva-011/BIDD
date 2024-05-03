const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Here you can handle storing the data to a database
  // For demonstration purposes, let's just log the data
  console.log('Username:', username);
  console.log('Password:', password);
  
  res.send('Login successful');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
