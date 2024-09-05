const express = require('express');
const registerUser = require('../Controller/registerUser');
const checkEmail = require('../Controller/checkEmail');
const checkPassword = require('../Controller/password');
const userDetails = require('../Controller/userDetails');
const logOut = require('../Controller/logOut');
const updateUserDetails = require('../Controller/updateUserDetails');
const searchUser = require('../Controller/SearchUser');
const router = express.Router();


// Create user api
router.post('/register',registerUser);
// check email
router.post('/email',checkEmail);

// check password
router.post('/password',checkPassword);
// login user details
router.get('/user-details',userDetails);
//logOut user
router.get('/logout',logOut);
//update user details
router.post('/update-user',updateUserDetails)
//search user
router.post('/search-user',searchUser)
module.exports = router;

