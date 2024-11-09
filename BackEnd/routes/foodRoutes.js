import express from 'express';
import { addFood,listFood,removeFood } from '../controllers/foodControler.js'; // Ensure the file name is correct
import multer from 'multer';
import auth from '../middleware/authMiddleware.js';

const foodRouter = express.Router();

// IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
    destination: 'uploads',  // Ensure the 'uploads' directory exists
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);  // Correct filename key and file.originalname
    }
});

const upload = multer({ storage: storage });  // Initialize multer before using it in routes

// POST METHOD
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);

export default foodRouter;
