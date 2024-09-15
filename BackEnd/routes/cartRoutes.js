import express from 'express';
import { addToCart, removeFromCart, getUserCart } from '../controllers/cartControllers.js';
import auth from '../middleware/authMiddleware.js';

const cartRouter = express.Router();

// @route   POST api/cart/add
cartRouter.post('/add', auth, addToCart);

// @route   POST api/cart/remove
cartRouter.post('/remove', auth, removeFromCart);

// @route   POST api/cart/get
cartRouter.post('/get', auth, getUserCart);

export default cartRouter;
