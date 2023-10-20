const AppError = require("../../utils/AppError");
const DiskStorage = require("../../providers/DiskStorage");

class UserAvatarUpdateService {
  constructor(userAvatarUpdateRepository) {
    this.userAvatarUpdateRepository = userAvatarUpdateRepository;
  }

  async execute({ user_id, avatarFileName }) {
    const diskStorage = new DiskStorage();

    const user = await this.userAvatarUpdateRepository.findByUser(user_id);

    if (!user) {
      throw new AppError(
        "Only authenticated users can change their avatar",
        401
      );
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFileName);
    user.avatar = filename;

    const updatedUser = this.userAvatarUpdateRepository.update({
      user,
      user_id,
    });

    return updatedUser;
  }
}

module.exports = UserAvatarUpdateService;
