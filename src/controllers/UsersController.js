const UsersRepository = require("../repositories/users/UsersRepository");
const UsersCreateService = require("../services/users/UsersCreateService");
const UsersUpdateService = require("../services/users/UsersUpdateService");
const UsersUpdateRepository = require("../repositories/users/UsersUpdateRepository");
const UsersDeleteRepository = require("../repositories/users/UsersDeleteRepository");
const UsersDeleteService = require("../services/users/UsersDeleteService");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const usersCreateService = new UsersCreateService(usersRepository);
    await usersCreateService.execute({ name, email, password });
    response.json();
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
