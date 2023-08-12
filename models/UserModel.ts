import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    fullname:{
        type: String,
        required: [true, "Fullname is required"],
    },
    phoneNumber:{
        type: String,
        default: null
    },
    role:{
        type: Boolean,
        default: false,
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiryDate: Date,
})

const User = models.User || model("User", UserSchema)

export default User