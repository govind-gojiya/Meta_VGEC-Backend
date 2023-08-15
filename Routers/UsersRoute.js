const express = require('express');
const UserController = require('./../Controllers/UserController')
const { verifyToken } = require("../Middleware/Auth.js");

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyToken, UserController.getUser);

module.exports = userRouter;


/* READ */
// router.get("/:id", verifyToken, getUser);
// router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);