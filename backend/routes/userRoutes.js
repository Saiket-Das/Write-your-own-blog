const express = require('express');
const usersControllers = require('../controllers/userControllers')


const router = express.Router();

router.route('/')
    /** 
        * @api {get} /user - All users 
        * @apiDescription get All users 
        
        * @apiHeader {strinf} Authorization - User's access token 
        
        * @apiSucess {Object[]}  All the users
        
        // * @apiError {Unauthorization 401} Unauthorized      Only Authenticated Users can access the data. 
        // * @apiError {Forbidden 403} Forbidden      Only Admin users can access the data
     **/
    .get(usersControllers.getUsers)


    router.route('/:email')
    /** 
        * @api {put} /user/:email - Add new user 
        * @apiDescription Create new user 
         
        * @apiParam {email}  Individual users
        * @apiSucess {Object}  User's data
        
        // * @apiError {Unauthorization 401} Unauthorized      Only Authenticated Users can access the data. 
        // * @apiError {Forbidden 403} Forbidden      Only Admin users can access the data
    **/
    .put(usersControllers.createUser)



module.exports = router;