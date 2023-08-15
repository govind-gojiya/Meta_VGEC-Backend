const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/UsersModel.js");
const UserOtherInfo = require("../Models/UserOtherInfoModel.js");

/* REGISTER USER */
exports.register = async (req, res) => {
  try {
    const {
        firstName,
        lastName,
        enNo,
        branch,
        year,
        email,
        phone,
        gender,
        proof,
        isPhoto,
        photoColor
    } = req.body;

    // const salt = await bcrypt.genSalt();
    // const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
        firstName,
        lastName,
        enNo,
        branch,
        year,
        email,
        phone,
        gender,
        proof
    });
    const savedUser = await newUser.save();

    const { _id } = savedUser;

    const userOther = new UserOtherInfo({
        userId: _id,
        name: firstName + " " + lastName,
        profileType: isPhoto ? "photo" : "color",
        profile: isPhoto ? profilePhoto : photoColor,
    });

    const savedUserOther = await userOther.save();

    delete savedUser.password;
    delete savedUserOther.userId;

    res.status(201).json({ savedUser, savedUserOther });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    if(user.accountStatus !== 1) return res.status(400).json({ msg: "Account not verified. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};