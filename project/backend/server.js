// backend/server.js
const express = require('express');
const cors = require('cors');
const { testDbConnection } = require('./db');
require('dotenv').config();

const flightRoutes = require('./routes/flightRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
testDbConnection();

// API Routes
app.use('/api/flights', flightRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Flight Reservation Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});