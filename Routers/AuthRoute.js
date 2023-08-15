const express = require("express");
const { login } = require("../Controllers/AuthController.js");

const router = express.Router();

router.post("/login", login);

export default router;