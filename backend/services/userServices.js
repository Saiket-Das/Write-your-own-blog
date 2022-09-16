const User = require("../models/userModel");

exports.getUsersService = async () => {

    const users = await User.find({});
    return users;
}


exports.createUserService = async (paramEmail, userDetails) => {
    console.log(paramEmail)
    const filter = { email: paramEmail };
    const options = { upsert: true };
    const updateDoc = {
        $set: userDetails,
    };

    const result = await User.updateOne(filter, updateDoc, options);
    // var token = jwt.sign({ email: email },
    //     process.env.SECRET_TOKEN,
    //     { expiresIn: '1d' }
    // );

    return result;

}
