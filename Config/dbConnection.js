const mongoose = require('mongoose')

//connect db
const connectDb= async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected `);
    } catch (error) {
        console.log(`Error : ${error}`);
        
    }
}


module.exports= connectDb;