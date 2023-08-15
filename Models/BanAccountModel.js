const mongooes = require('mongoose');

const BanUserSchema = new mongooes.Schema({
    userId: {
        type: String
    },
    repotersId: [
        {
            type: String
        }
    ],
    banStatus: {
        type: Number,
        default: 0
    }
});

const BanUser = mongooes.model('Ban_Accounts', BanUserSchema);
module.exports = BanUser;