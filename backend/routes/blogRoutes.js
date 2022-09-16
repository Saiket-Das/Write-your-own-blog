const express = require('express');
const blogsControllers = require('../controllers/blogControllers')

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
    .get(blogsControllers.getBlogs)

    /** 
        * @api {put} /user/:email - Add new user 
        * @apiDescription Create new user 
         
        * @apiParam {email}  Individual users
        * @apiSucess {Object}  User's data
        
        // * @apiError {Unauthorization 401} Unauthorized      Only Authenticated Users can access the data. 
        // * @apiError {Forbidden 403} Forbidden      Only Admin users can access the data
    **/
    .post(blogsControllers.createBlog)



    router.route('/single/:id')
    .get(blogsControllers.getSignleBlog)
    .delete(blogsControllers.deleteSignleBlog)


router.route('/userblog')
      .get(blogsControllers.getUserBlog)



module.exports = router;