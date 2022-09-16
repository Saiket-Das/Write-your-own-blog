const { getUsersService, createUserService } = require("../services/userServices")



exports.getUsers = async (req, res, next) => {
    try {
        const User = await getUsersService()
        res.status(200).json({
            success: true,
            data: User
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



exports.createUser = async (req, res, next) => {
    try {
        const User = await createUserService(req.params.email, req.body);
        res.status(200).json({
            success: true,
            message: 'Data inserted',
            data: User
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


