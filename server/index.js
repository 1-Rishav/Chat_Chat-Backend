const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB")
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const {app,server} = require('./socket/index')
/* const app = express();
 */
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin: process.env.BASE_URL,
    credentials:true
}));

app.get('/',(req, res)=>{
res.send("Har nii manenge")
})

const PORT = process.env.PORT || 8080;

// Api endpoints
app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log(`Server listening on ${PORT}`);
    })
})
