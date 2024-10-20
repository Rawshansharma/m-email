const express = require('express');
const mongoose = require('mongoose');  // No need for destructuring here
require('dotenv').config();
const cookieParser = require('cookie-parser');  // Fix the typo
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());  // Use the corrected `cookieParser`

app.use(cors({
    origin: 'https://m-email.onrender.com',  // frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed HTTP methods
    credentials: true // if cookies or sessions are involved
  }));

// Routes
// Ensure that the correct routes are being used instead of the controller itself
app.use('/api', require('./routes/userRoute'));  
app.use('/api' , require('./routes/emailRoute'));  

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

// Connect to MongoDB
const url = process.env.MONGO_URL;  // Ensure you have this in your .env file
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
