const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel");

exports.getBlogsService = async () => {
    const users = await Blog.find({});
    return users;
}


exports.createBlogService = async ( blogDetails) => {
    const result = await Blog.create(blogDetails);
    return result;
}


exports.getSignleBlogService = async (paramsID) => {
    // const filter = { _id: (paramsID) };
    // const filter = new mongoose.SchemaTypes.ObjectId(paramsID);

    // const id = mongoose.Types.ObjectId(paramsID.trim());

    console.log(typeof paramsID)

    // if( !mongoose.isValidObjectId(id) ) {
    //     return ({
    //         success: false,
    //         message: "Id is not valid!",
    //     })};



    const blog = await Blog.findById(paramsID);
        // const blog = await Blog.findById(paramsID);

    console.log('Blog --->',blog)

    return blog
}


exports.deleteSignleBlogService = async (paramsID) => {


    // console.log('filter', filter)
    const blog = await Blog.deleteOne(paramsID)
        // , (err, data) => {
        // if (err) {
        //   return ({
        //     message: "Something went wrong, please try again later.",
        //   });
        // } else {
        //     return({
        //     message: "Post Deleted",
        //     data: data,
        //   });
        // }
        // });
}


exports.getUserBlogService = async (queryEmail) => {
    const filter = { authorEmail: queryEmail };
    const blogs = await Blog.find(filter);

    return blogs
}
