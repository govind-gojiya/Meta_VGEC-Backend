const User = require('./../Models/UsersModel');
const UserOtherInfo = require('./../Models/UserOtherInfoModel');

/* READ */
exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserOtherInfo.find({ userId: id });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserOtherInfo.find({ userId: id });

    const friends = await Promise.all(
      user.friendsId.map((id) => UserOtherInfo.find({ userId: id }))
    );
    const formattedFriends = friends.map(
      ({ _id, userId, name, profileType, profile }) => {
        return { _id, userId, name, profileType, profile };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
exports.addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await UserOtherInfo.findById({ userId: id });
    const friend = await UserOtherInfo.findById({ userId: friendId });

    if (user.friendsId.includes(friendId)) {
      user.friendsId = user.friendsId.filter((id) => id !== friendId);
      friend.friendsId = friend.friendsId.filter((id) => id !== id);
      user.noConnected = user.noConnected - 1;
      friend.noConnected = friend.noConnected - 1;
    } else {
      user.friendsId.push(friendId);
      friend.friendsId.push(id);
      user.noConnected = user.noConnected + 1;
      friend.noConnected = friend.noConnected + 1;
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friendsId.map((id) => UserOtherInfo.findById({ userId: id}))
    );
    const formattedFriends = friends.map(
      ({ userId, name, profileType, profile }) => {
        return { userId, name, profileType, profile };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
