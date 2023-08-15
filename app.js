const express = require('express');
const AdminRouter = require('./Routers/AdminRoute');
const UserRouter = require('./Routers/UsersRoute');
const PostRouter = require('./Routers/PostsRoute');
const path = require('path');
const cors = require('cors');
const dotenv = require("dotenv");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const authCon = require("./Controllers/AuthController");

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets/profile");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets/posts");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const User = require("./Models/UsersModel.js");
const UserOtherInfo = require("./Models/UserOtherInfoModel.js");
app.use("/api/v1/register", upload.single('proof'), authCon.register);
app.use("/api/v1/userRoute", UserRouter);
app.use("/api/v1/adminRoute", AdminRouter);
app.use("/api/v1/postRoute", PostRouter);

module.exports = app;