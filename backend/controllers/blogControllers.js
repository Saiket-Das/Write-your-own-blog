const { getBlogsService, createBlogService, getUserBlogService, getSignleBlogService, deleteSignleBlogService } = require("../services/blogServices")



exports.getBlogs = async (req, res, next) => {
    try {
        const allBlogs = await getBlogsService()
        res.status(200).json({
            success: true,
            data: allBlogs
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "What the issue wrong",
            error: error.message
        })
    }
}



exports.createBlog = async (req, res, next) => {
    try {
        const newBlog = await createBlogService(req.body);
        res.status(200).json({
            success: true,
            message: 'Data inserted',
            data: newBlog
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}

exports.getSignleBlog = async (req, res, next) => {
    try {
        const {id} = req.params
        const blog = await getSignleBlogService(id);
        res.status(200).json({
            success: true,
            data: blog
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}


exports.deleteSignleBlog = async (req, res, next) => {
    try {
        const {id} = req.params
        const blog = await deleteSignleBlogService(id);
        res.status(200).json({
            success: true,
            data: blog
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}



exports.getUserBlog = async (req, res, next) => {
    try {
        const userBlog = await getUserBlogService(req.query.email);
        res.status(200).json({
            success: true,
            data: userBlog
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}
