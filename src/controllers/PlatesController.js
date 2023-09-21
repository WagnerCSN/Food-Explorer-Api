const PlatesRepository = require("../repositories/plates/PlatesRepository");
const PlatesCreateService = require("../services/plates/PlatesCreateService");
const PlatesUpdateService = require("../services/plates/PlatesUpdateService");
const PlatesUpdateRepository = require("../repositories/plates/PlatesUpdateRepository");
const PlatesDeleteRepository = require("../repositories/plates/PlatesDeleteRepository");
const PlatesDeleteService = require("../services/plates/PlatesDeleteService");
const PlatesShowRepository = require("../repositories/plates/PlatesShowRepository");
const PlatesShowService = require("../services/plates/PlatesShowService");
const PlatesIndexRepository = require("../repositories/plates/PlatesIndexRepository");
const PlatesIndexService = require("../services/plates/PlatesIndexService");

class PlatesController {
  async create(request, response) {
    const { name, description, cost, image } = request.body;
    const { typeOfPlate_id, ingredient_id } = request.params;

    const platesRepository = new PlatesRepository();
    const platesCreateService = new PlatesCreateService(platesRepository);
    await platesCreateService.execute({ name, description, cost, image, typeOfPlate_id, ingredient_id });

    response.json();

  }

  async show(request, response){
    const { id } = request.params;

    const platesShowRepository = new PlatesShowRepository();
    const platesShowService = new PlatesShowService(platesShowRepository);
    const plateShow = await platesShowService.execute({id});
    response.json(plateShow);

  }

  // async index(request, response){
  //   const { id, name, role } = request.query;

  //   const platesIndexRepository = new PlatesIndexRepository();
  //   const platesIndexService = new PlatesIndexService(platesIndexRepository);
  //   const plateSearch = await platesIndexService.execute({id, name, role});
  //   response.json(plateSearch);

  // }

  // async update(request, response) {
  //   const { name, email, password, old_password } = request.body;
  //   // const id = request.user.id;
  //   const { id } = request.params;
  //   const usersUpdateRepository = new UsersUpdateRepository();
  //   const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
  //   await usersUpdateService.execute({
  //     name,
  //     email,
  //     password,
  //     old_password,
  //     id,
  //   });

  //   response.json();
  // }
  
  async delete(request, response){
    const {id} = request.params;

    const platesDeleteRepository = new PlatesDeleteRepository();
    const platesDeleteService = new PlatesDeleteService(platesDeleteRepository);
    await platesDeleteService.execute({id});

    return response.json();
  }
}

module.exports = PlatesController;
