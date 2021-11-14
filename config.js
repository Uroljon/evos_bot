require("dotenv").config()

const {TOKEN, MONGO_LOCAL_URL, EMAIL, PASSWORD, SMS_TOKEN_URL, SMS_SEND_URL} = process.env;

module.exports = {
    TOKEN,
    MONGO_LOCAL_URL,
    EMAIL,
    PASSWORD,
    SMS_TOKEN_URL, 
    SMS_SEND_URL
}