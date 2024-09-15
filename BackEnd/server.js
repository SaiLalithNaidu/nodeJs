import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';  // Use `import` for routes and add `.js` extension
import foodRoutes from './routes/foodRoutes.js';  // Use `import` for routes and add `.js` extension
import cartRouter from './routes/cartRoutes.js';

dotenv.config();

const app = express();

// CORS Middleware
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173']; // Add both client and admin URLs

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);  // Use `auth route` for routes
app.use('/api/food', foodRoutes);  // Use `import` for routes
app.use('/images',express.static('uploads'));
//Carts routes
app.use('/api/cart',cartRouter);

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
