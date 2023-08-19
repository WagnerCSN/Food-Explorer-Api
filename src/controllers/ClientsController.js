const ClientsRepository = require("../repositories/ClientsRepository");
const ClientsCreateService = require("../services/ClientsCreateService");
const ClientsUpdateService = require("../services/ClientsUpdateService");
const ClientsUpdateRepository = require("../repositories/ClientsUpdateRepository");

class ClientsController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const clientsRepository = new ClientsRepository();
    const clientsCreateService = new ClientsCreateService(clientsRepository);
    await clientsCreateService.execute({ name, email, password });
    response.json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const id = request.user.id;

    const clientsUpdateRepository = new ClientsUpdateRepository();
    const clientsUpdateService = new ClientsUpdateService(
      clientsUpdateRepository
    );
    await clientsUpdateService.execute({
      name,
      email,
      password,
      old_password,
      id,
    });

    response.json();
  }
}
module.exports = ClientsController;
