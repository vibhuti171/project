import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import app from "./app.js";

// use try catch and async wait it's a better practice
import connectDb from "./db/index.js";
dotenv.config({
    path: './.env'
})

connectDb()
.then(() => {

    app.listen(process.env.PORT || 8000, () => {
        console.log("app listening on port: ", process.env.PORT)
    })
})
.catch((error) =>
    console.log("Connection failed with db", error)
);

/*
;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR ", error);
            throw error;

            app.listen(process.env.PORT, () => {
                console.log(`App is listening`);
            })
        })
    } catch (error) {
        console.error("ERROR", error)
        throw error;
        
    }
    
})() 
*/



