const UsersValidatedRepository = require("../repositories/usersValidated/UsersValidatedRepository");
const UsersValidatedCreateService = require("../services/usersValidated/UsersValidatedCreateService");

class UsersValidatedController {
  async index(request, response, next) {
    try {
      const { user } = request;
      const usersValidatedRepository = new UsersValidatedRepository();
      const usersValidatedCreateService = new UsersValidatedCreateService(
        usersValidatedRepository
      );
      await usersValidatedCreateService.execute({ user });

      return response.status(200).json();
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UsersValidatedController;
