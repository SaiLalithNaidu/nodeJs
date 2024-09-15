import User from '../models/User.js';

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.userId });
        console.log("User data retrieved:", userData);
        let cartData = userData.cartData || {};

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = req.body.quantity || 1;
        } else {
            cartData[req.body.itemId] += req.body.quantity || 1;
        }

        await User.findByIdAndUpdate(req.userId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.userId });
        let cartData = userData.cartData || {};

        if (cartData[req.body.itemId]) {
            delete cartData[req.body.itemId];
            await User.findByIdAndUpdate(req.userId, { cartData });
            res.json({ success: true, message: "Removed from cart" });
        } else {
            res.json({ success: false, message: "Item not found in cart" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Fetch user cart
const getUserCart = async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.userId });
        res.json({ success: true, cartData: userData.cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getUserCart };
