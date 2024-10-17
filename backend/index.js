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
