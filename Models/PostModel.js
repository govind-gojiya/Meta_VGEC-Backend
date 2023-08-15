const mongooes = require('mongoose');

const PostSchema = new mongooes.Schema({
    img: [
        {
            type: String
        }
    ],
    desc: {
        type: String,
        trim: true
    },
    taggedPeople: [
        {
            type: String
        }
    ],
    postType: {
        type: String,
        trim: true
    },
    noReport: {
        type: Number,
        default: 0
    },
    reportersId: [
        {
            type: String
        }
    ],
    noLikes: {
        type: Number,
        default: 0
    },
    likersId: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: [],
    },
    userId: {
        type: String
    },
    userPhoto: {
        type: String
    },
    userName: {
        type: String
    }
}, { timestamps: true });

const Post = mongooes.model('Requests_friend', PostSchema);
module.exports = Post;