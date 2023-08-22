class TypeOfPlatesController{
    async create(request, response) {
        const { name } = request.body;

        typeOfPlatesRepository = new TypeOfPlatesRepository();
        typeOfPlatesCreateService = new TypeOfPlatesCreateService(typeOfPlatesRepository);
        await typeOfPlatesCreateService.execute({name});

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

module.exports = TypeOfPlatesController;