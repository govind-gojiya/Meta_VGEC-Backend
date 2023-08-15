const express = require('express');
const AdminController = require('./../Controllers/AdminController')

const adminRouter = express.Router();

adminRouter.route('/')
    .get(AdminController.test);

module.exports = adminRouter;