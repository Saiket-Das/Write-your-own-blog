const mongoose = require('mongoose');


const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },

        email: {
            type: String,
            require: true,
            unique: true
        },

        photo: {
            type: String,
            require: true,
            default: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        },

    },
    {
        timestamps: true,
    }
)



const User = mongoose.model('User', userModel);

module.exports = User;