const mongooes = require('mongoose');

const AdminSchema = new mongooes.Schema({
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
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    }
});

const Admin = mongooes.model('Admins', AdminSchema);
module.exports = Admin;