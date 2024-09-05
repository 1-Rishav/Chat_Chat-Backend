const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
async function checkPassword(req , res){
    try {
      const {password , email} = req.body;
      const user = await UserModel.findOne({email});
      const verifyPassword = await bcrypt.compare(password,user.password)
      if(!user){
        return res.status(400).json({
            message: "User not found",
            error:true
        })
    }  
       else if(!verifyPassword){
            return res.status(404).json({
                message:"Credentials not matching",
                error:true
            })
        }
        const tokenData={
            id:user._id,
            email:user.email
        }
        const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'200d'} )
        console.log(token)
        const cookieOptions={
            http:true,
            secure:true
        }
        return res.cookie('token',token,cookieOptions).status(200).json({
            message: "Login successful",
            token:token,
            success:true
        })
    } catch (error) {
        return res.status(404).json({
            message:error.message || error,
            error:true
        })
    }
}module.exports = checkPassword;