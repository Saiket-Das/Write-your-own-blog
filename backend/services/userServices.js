const User = require("../models/userModel");
const jwt = require('jsonwebtoken');



exports.getUsersService = async () => {

    const users = await User.find({});
    return users;
}


exports.createUserService = async (paramEmail, userDetails) => {
    const filter = { email: paramEmail };
    const options = { upsert: true };
    const updateDoc = {
        $set: userDetails,
    };

    const result = await User.updateOne(filter, updateDoc, options);
    var token = jwt.sign({ email: paramEmail },
        process.env.JWT_SECRET,
        { expiresIn: '5d' }
    );


    return ({ result, accessToken: token });

}
