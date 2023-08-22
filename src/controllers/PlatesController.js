class PlatesController {
  async create(request, response) {
    const { name, description, cost, image } = request.body;

    platesRepository = new PlatesRepository();
    platesCreateService = new PlatesCreateService(platesRepository);
    await platesCreateService.execute({ name, description, cost, image });

    response.json();

  }

  async show(request, response) {
   
  }

  async index(request, response) {
    
  }

  async update(request, response){

  }

  async delete(request, response) {
    
  }
}
