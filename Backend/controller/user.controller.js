import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup= async (req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user= await User.findOne({email});
        if (user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashPassword=bcryptjs.hash(password,10);

        const createdUser=new User({
            
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({ message:"User created sucessfully" });

    }catch (error){
        console.log("Error:"+error.message)
        res.status(500).json({message:"Internal server error"});

    }
};