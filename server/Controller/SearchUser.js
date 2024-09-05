const UserModel = require('../models/UserModel');

async function searchUser(req,res){
    try {
        const {search} = req.body
        const query = new RegExp(search,"i" , "g")
        const user = await UserModel.find({
            "$or":[
                {name: query},
                {email: query},
            ]
        }).select("-password")
        return res.json({
            message:'All users',
            data:user,
            success:true
        })
    } catch (error) {
       return res.status(404).json({
        message:error.message || error,
        error:error
       }) 
    }
}

module.exports = searchUser