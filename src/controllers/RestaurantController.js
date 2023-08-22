class RestaurantController{
    async create(request, response) {
        const { name, fone, email, address, image, cnpj, city, state} = request.body;

        restaurantRepository = new RestaurantRepository();
        restaurantCreateService = new RestaurantCreateService(restaurantRepository);
        await restaurantCreateService.execute({name, fone, email, address, image, cnpj, city, state});

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

module.exports = RestaurantController;