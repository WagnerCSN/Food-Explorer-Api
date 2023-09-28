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
    const { typeOfPlate_id, ingredient_id } = request.query;

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

  async index(request, response){
    const { name, typeOfPlate_name, ingredients_name} = request.query;

    const platesIndexRepository = new PlatesIndexRepository();
    const platesIndexService = new PlatesIndexService(platesIndexRepository);
    const platesSearch = await platesIndexService.execute({name, typeOfPlate_name, ingredients_name});
    response.json(platesSearch);

  }

  async update(request, response) {
    const { name, description, cost, image, typeOfPlate_id, ingredient_id } = request.body;
    const { id } = request.params;

    const platesUpdateRepository = new PlatesUpdateRepository();
    const platesUpdateService = new PlatesUpdateService(platesUpdateRepository);
    await platesUpdateService.execute({name, description, cost, image, typeOfPlate_id, ingredient_id, id});

    response.json();
  }
  
  async delete(request, response){
    const {id} = request.params;

    const platesDeleteRepository = new PlatesDeleteRepository();
    const platesDeleteService = new PlatesDeleteService(platesDeleteRepository);
    await platesDeleteService.execute({id});

    return response.json();
  }
}

module.exports = PlatesController;
