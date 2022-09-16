const mongoose = require('mongoose');


const blogModel = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },

        description: {
            type: String,
            require: true,
        },

        photoUrl: {
            type: String,
            require: true,
        },

        date:{
            type: String,
            require: true,
        }

    },
    {
        timestamps: true,
    }
)



const Blog = mongoose.model('Blog', blogModel);

module.exports = Blog;