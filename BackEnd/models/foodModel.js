import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  // Define your schema fields here
  name: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
        required: true,
  },
  category:{
    type: String,
        required: true,
  },
  image: {
    type: String,
        required: true,
  }

  // Add other fields as needed
});

const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);

export default foodModel;
