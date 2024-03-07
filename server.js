const express= require('express')
const morgan= require('morgan')
const  bodyParser =require("body-parser")
const dotanv= require('dotenv')

const parkingLotRoutes = require('./routes/parkingLotRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const slotRoutes = require('./routes/slotRoutes');
const connectDB= require("./config/config.js")

//dotenv config
dotanv.config();

// databse configurations
connectDB();
//rest object
const app= express()

// middlewares

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
//port

const PORT= process.env.PORT ||8000;

// routes
// Define routes
app.use(parkingLotRoutes);
app.use(parkingRoutes);
app.use(slotRoutes);

//listen
app.listen(PORT, () =>{
    console.log(`server is connected on the PORT  ${PORT}`)
})