const ClientsRepository = require("../repositories/clients/ClientsRepository");
const ClientsCreateService = require("../services/clients/ClientsCreateService");
const ClientsUpdateService = require("../services/clients/ClientsUpdateService");
const ClientsUpdateRepository = require("../repositories/clients/ClientsUpdateRepository");

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
    // const id = request.user.id;
    const { id } = request.params;
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
