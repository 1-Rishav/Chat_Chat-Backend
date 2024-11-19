const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}Chat`);
        const connection = mongoose.connection
        connection.on('Connected',()=>{
            console.log("Connect to DB")
        })
        connection.on('error',(error)=>{
            console.log("Something is wrong" , error)
        })
    } catch (error) {
        console.log("Something went wrong" , error)
    }
}
module.exports = connectDB;