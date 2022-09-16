const mongoose = require('mongoose');


const blogModel = mongoose.Schema(
    {
        authorEmail:{
            type: String,
            require: true
        },

        authorName:{
            type: String,
            require: true
        },

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

        refLink:{
            type: String
        }
    },
    {
        timestamps: true,
    }
)



const Blog = mongoose.model('Blog', blogModel);

module.exports = Blog;