const express = require('express');
const PostController = require('./../Controllers/PostController')
const { verifyToken } = require("../Middleware/Auth.js");

const postRouter = express.Router();

postRouter.route('/')
    .get(verifyToken, PostController.test);
    
module.exports = postRouter;


// const router = express.Router();

/* READ */
// router.get("/", verifyToken, getFeedPosts);
// router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);