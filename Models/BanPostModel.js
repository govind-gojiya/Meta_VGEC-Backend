const mongooes = require('mongoose');

const BanPostSchema = new mongooes.Schema({
    postId: {
        type: String
    },
    repotersId: [
        {
            type: String
        }
    ],
    banPostStatus: {
        type: Number,
        default: 0
    }
});

const BanPost = mongooes.model('Ban_Post', BanPostSchema);
module.exports = BanPost;