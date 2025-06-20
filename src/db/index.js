import mongoose from "mongoose";
import dotenv from "dotenv"
// use try catch and async wait it's a better practice
import { DB_NAME } from "../constants.js";
console.log(`${process.env.MONGODB_URI}`)
const connectDb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDb connected on host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
        
    }
}

export default connectDb