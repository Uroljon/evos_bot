const mongoose = require("mongoose");
const { MONGO_LOCAL_URL } = require("../../config");

module.exports = async function () {
    try {
        await mongoose.connect(MONGO_LOCAL_URL)
        console.log("Bazaga ulandi");
    } catch (error) {
        console.log("Mongo error: ", error);
    }
}