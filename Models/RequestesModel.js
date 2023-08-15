const mongooes = require('mongoose');

const RequestFriendSchema = new mongooes.Schema({
    requestedId: {
        type: String
    },
    friendId: [
        {
            type: String
        }
    ],
    request_Status: {
        type: Number,
        default: 0
    }
});

const RequestUser = mongooes.model('Requests_friend', RequestFriendSchema);
module.exports = RequestUser;