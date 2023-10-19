const UsersRepository = require("../repositories/users/UsersRepository");
const UsersCreateService = require("../services/users/UsersCreateService");
const UsersUpdateService = require("../services/users/UsersUpdateService");
const UsersUpdateRepository = require("../repositories/users/UsersUpdateRepository");
const UsersDeleteRepository = require("../repositories/users/UsersDeleteRepository");
const UsersDeleteService = require("../services/users/UsersDeleteService");
const UsersShowRepository = require("../repositories/users/UsersShowRepository");
const UsersShowService = require("../services/users/UsersShowService");
const UsersIndexRepository = require("../repositories/users/UsersIndexRepository");
const UsersIndexService = require("../services/users/UsersIndexService");

class UsersController {
  async create(request, response, next) {
    try {
      const { name, email, password } = request.body;

      const usersRepository = new UsersRepository();
      const usersCreateService = new UsersCreateService(usersRepository);
      await usersCreateService.execute({ name, email, password });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;

      const usersShowRepository = new UsersShowRepository();
      const usersShowService = new UsersShowService(usersShowRepository);
      const userShow = await usersShowService.execute({ id });

      return response.json(userShow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { id, name, role } = request.query;

      const usersIndexRepository = new UsersIndexRepository();
      const usersIndexService = new UsersIndexService(usersIndexRepository);
      const userSearch = await usersIndexService.execute({ id, name, role });

      return response.json(userSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name, email, password, old_password } = request.body;
      const id = request.user.id;

      const usersUpdateRepository = new UsersUpdateRepository();
      const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
      await usersUpdateService.execute({
        name,
        email,
        password,
        old_password,
        id,
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const usersDeleteRepository = new UsersDeleteRepository();
      const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
      await usersDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UsersController;
