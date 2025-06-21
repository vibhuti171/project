import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"

cloudinary.config({ 
    cloud_name: 'dckot3ryv', 
    api_key: '933283135955317', 
    api_secret: '_ZSuG0tjWKwyYpAu4LczDcJ1XRo' // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const reponse = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file uploaded on cloudinary", response.url);
        return response;

        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null

        
    }
}
export {uploadOnCloudinary}
    