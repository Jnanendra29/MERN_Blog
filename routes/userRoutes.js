const express = require("express");
const { getAllUsers, registerUser, loginUser } = require("../controller/userController");

//router object
const router = express.Router();

//get all users
router.get('/allUsers', getAllUsers);

//create user
router.post('/register', registerUser);

//login user
router.post('/login', loginUser);

module.exports = router;