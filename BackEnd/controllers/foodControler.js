import foodModel from '../models/foodModel.js';
import fs from "fs";

//ADD FOOD API
const addFood = async (req,res) => {
    try 
    {
        let image_fileName = `${req.file.filename}`;


        const {name, description, price, category, image} = req.body;

        const food = new foodModel({name:name, description:description, price:price, category:category, image:image_fileName})
        try
        {
            await food.save();
            res.status(201).json({supervised:true,message:"Food added successfully"});
        }
        catch (err)
        {
            console.log(`${err.message}`);
        }

    }
    catch(error)
    {
        console.log(`Add Food Error :- ${error.message}`);
    }
}

//GET ALL FOOD API
const listFood = async (req,res) => {
    try
    {
        const foods = await foodModel.find({});
        res.json({success: true, data:foods})
    }
    catch(error)
    {
        console.log(`Food List Error :- ${error.message}`);
        res.json({success:false, message:"Error"})
    }

}

//REMOVE FOOD ITEM FROM LIST
const removeFood = async(req,res) =>{
    try
    {
        const food = await foodModel.find({ _id: req.params.foodId });  // Correct

        // Below code remove the local image file 
        fs.unlink(`uploads/${food.image}`,() =>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message:"Food Item removed successfully"})
    }
    catch(error)
    {
        console.log(error);
        res.json({success: false, message:"Error"})
    }


}

export {addFood, listFood, removeFood};