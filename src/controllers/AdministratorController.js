class AdministratorController{
    async create(request, response) {
        const { name, isAdmin, password, email } = request.body;

        administratorRepository = new AdministratorRepository();
        administratorCreateService = new AdmistratorCreateService(admnistratorRepository);
        await administratorCreateService.create({name, isAdmin, password, email});

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

module.exports = AdministratorController;