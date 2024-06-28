const mongoose = require("mongoose");

const authUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const authUser = mongoose.model("auth_user", authUserSchema);

module.exports = {
    authUser
}