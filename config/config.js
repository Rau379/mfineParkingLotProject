const mongoose= require('mongoose')
require('colors')

//connectDB Function
const  connectDB = async () => {
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.host}`)

    }catch(error){
     console.log(`${"Error connecting to database"}`)
    }
}

// export
module.exports = connectDB;
