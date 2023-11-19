const AppError = require("../../utils/AppError");

class UsersValidatedCreateService {
  constructor(usersValidatedRepository) {
    this.usersValidatedRepository = usersValidatedRepository;
  }
  async execute({ user }) {

    const checkUserExist = await this.usersRepository.findByUser(user);

    if (checkUserExist.length === 0) {
        throw new AppError("Unauthorized", 401);
      }
    }
}
module.exports = UsersValidatedCreateService;