const mongooes = require('mongoose');

const UserOtherInfoSchema = new mongooes.Schema({
    userId: {
        type: String
    },
    name: {
        type: String,
    },
    profileType: {
        type: String,
        enum: ['Photo', 'Word'],
        required: true,
    },
    profile: {
        type: String,
        required: true
    },
    noPosts: {
        type: Number,
        default: 0
    },
    postsId: [
        {
            type: String
        }
    ],
    noConnected: {
        type: Number,
        default: 0
    },
    noBanPosts: {
        type: Number,
        default: 0
    },
    friendsId: [
        {
            type: String
        }
    ],
    noPanddingRequests: {
        type: Number,
        default: 0
    },
    panddingRequests: [
        {
            type: String
        }
    ],
    profileType: {
        type: String,
        enum: ['Public', 'Private'],
        required: true,
        default: 'Public'
    },

});

const UserOtherInfo = mongooes.model('User_Other_Info', UserOtherInfoSchema);
module.exports = UserOtherInfo;