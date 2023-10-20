const UserAvatarUpdateRepository = require("../repositories/userAvatar/UserAvatarUpdateRepository");
const UserAvatarUpdateService = require("../services/userAvatar/UserAvatarUpdateService");

class UserAvatarController{
async update(request, response, next) {
    try {
        const user_id = request.user.id;
        const avatarFileName = request.file.filename;

      const userAvatarUpdateRepository = new UserAvatarUpdateRepository();
      const userAvatarUpdateService = new UserAvatarUpdateService(userAvatarUpdateRepository);
      await userAvatarUpdateService.execute({user_id, avatarFileName
       
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserAvatarController;