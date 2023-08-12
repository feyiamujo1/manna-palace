import { Schema, model, models } from "mongoose";

const FoodItemSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    category:{
        type: String,
        required: [true, "Category is required"],
    },
    description:{
        type: String,
        required: [true, "Description is required"],
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
    },
    // image:{
    //     type: String,
    //     required: [true, "Image is required"],
    // }
})

const FoodItem = models.FoodItem || model("FoodItem", FoodItemSchema)

export default FoodItem