const mongoose = require('mongoose')
require('dotenv').config();

const hola = process.env.AB

const connectDB = async () => {

    try {
        await mongoose.connect(hola)
    console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed" + error.message)
    }
}
module.exports = connectDB  