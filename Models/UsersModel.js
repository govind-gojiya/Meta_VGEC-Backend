const mongooes = require('mongoose');

const UserSchema = new mongooes.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    enNo: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    branch: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    year: {
        type: Number,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    proof: {
        type: String
    },
    accountStatus: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 20
    }
}, { timestamps: true });

const User = mongooes.model('Users', UserSchema);
module.exports = User;