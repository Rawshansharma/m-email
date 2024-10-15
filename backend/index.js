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

// CORS options
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
};

app.use(cors(corsOptions));

// Routes
// Ensure that the correct routes are being used instead of the controller itself
app.use('/api/users', require('./routes/userRoute'));  
app.use('/email/' , require('./routes/emailRoute'));  

// Start server
app.listen(5000, () => {
    console.log('Server started at port 5000');
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
