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
  async create(request, response) {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const usersCreateService = new UsersCreateService(usersRepository);
    await usersCreateService.execute({ name, email, password });
    response.json();
  }

  async show(request, response){
    const { id } = request.params;

    const usersShowRepository = new UsersShowRepository();
    const usersShowService = new UsersShowService(usersShowRepository);
    const userShow = await usersShowService.execute({id});
    response.json(userShow);

  }

  async index(request, response){
    const { id, name, role } = request.query;

    const usersIndexRepository = new UsersIndexRepository();
    const usersIndexService = new UsersIndexService(usersIndexRepository);
    const userSearch = await usersIndexService.execute({id, name, role});
    response.json(userSearch);

  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    // const id = request.user.id;
    const { id } = request.params;
    const usersUpdateRepository = new UsersUpdateRepository();
    const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
    await usersUpdateService.execute({
      name,
      email,
      password,
      old_password,
      id,
    });

    response.json();
  }
  
  async delete(request, response){
    const {id} = request.params;

    const usersDeleteRepository = new UsersDeleteRepository();
    const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
    await usersDeleteService.execute({id});

    return response.json();
  }
}
module.exports = UsersController;
