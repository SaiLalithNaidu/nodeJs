import foodModel from '../models/foodModel.js';


import fs from "fs";

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

export {addFood};