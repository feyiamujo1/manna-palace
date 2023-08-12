import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string

// Check if the MONGODB_URI is set if not throw the error below
if (!MONGODB_URI){
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Function to connect to the database
export const connectToMongoDB = async () =>{
    try{
        const {connection} = await mongoose.connect(MONGODB_URI)

        if(connection.readyState === 1){
            return Promise.resolve(true)
        }
    }
    catch(error){
        return Promise.reject(error)
    }
}