const Post = require('./../Models/PostModel');

exports.test = async(req, res) => {
    console.log("User Test");
    res.send("Test");
};