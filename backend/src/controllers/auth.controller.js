
import { userDto } from "../dto/userdto.js";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    //console.log(req.body);
    try{
        //validating req.body and generating the jwt token
        const validatedUser = userDto.parse(req.body);
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(validatedUser.password,salt);
        validatedUser.password = hashedPassword;
        

       //checking whether the email provided is unique
       const existingUser = await UserModel.findOne({ email: req.body.email });
       if(existingUser)
        return res.status(403).json("User already exists")

        const data = await UserModel.create(validatedUser);
        const token =  jwt.sign({email: data.email, id:data._id}, process.env.JWT_SECRET, { expiresIn: "1d" })
        
        return res
        .status(200)
        .json({ message: "User Logged in Successfully", token , data});
        
        
      
    }catch(error){
        
        return res.status(400).json({status: 400, error})
    }
}

