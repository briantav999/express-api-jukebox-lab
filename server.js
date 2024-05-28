const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors');
const trackRouter = require('./controllers/Tracks.js')
dotenv.config()





app.use(cors());

mongoose.connect(process.env.MONGODB_URI)

app.use(express.json())

app.use('/recipes', trackRouter);

app.listen(3000, ()=>{
    console.log("App is Running")
})