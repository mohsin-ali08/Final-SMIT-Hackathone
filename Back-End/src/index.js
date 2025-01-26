import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoute from './routes/auth.routes.js';
import userRoute from './routes/user.routes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS setup with dynamic origin based on the environment
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [process.env.FRONTEND_URL] // Production Frontend URL (set in .env)
  : ['http://localhost:5173']; // Development Frontend URL

// Middleware
app.use(
  cors({
    origin: allowedOrigins, // Restrict origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies (if necessary)
  })
);
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan('tiny')); // HTTP request logger

// API Routes
app.use('/api/v1/auth', authRoute); // Authentication routes
app.use('/api/v1/user', userRoute); // User routes

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((error) => {
    console.error('Database connection error:', error.message);
    process.exit(1); // Optional: Exit on connection failure
  });
