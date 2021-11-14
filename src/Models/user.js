const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user_id: {
        type: String, 
        required: true,
        unique: true
    },
    phone_number: {
        required: true,
        unique: true,
        type: String
    },
    city: {
        type: String
    },
    activation_code:{
        type: Number
    },
    step: {
        type: String    
    },
    lang: {
        type: String,
        default: 0,
        required: true
    }
})
const users = mongoose.model("users", userSchema)
module.exports = users;