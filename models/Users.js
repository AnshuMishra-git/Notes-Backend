const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        familyName: {
            type: String,
        },
        givenName: {
            type: String,
        },
        googleId: {
            type: String,
        },
        gender: {
            type: String,
        },
        emailId: {
            type: String,
            unique: true,
        },
        name: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        userToken: {
            type: String,
            default: null
        },
    },
    {
        timestamps: true,
    }

);




const users = mongoose.model("users", userSchema);

module.exports = users;