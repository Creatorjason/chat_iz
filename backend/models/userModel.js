const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true,
        default: "https://www.flaticon.com/free-icons/hacker"
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userModel);
module.exports = User;
