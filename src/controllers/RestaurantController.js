class RestaurantController{
    async create(request, response) {
        const { name, fone, email, address, image, cnpj, city, state} = request.body;

        restaurantRepository = new RestaurantRepository();
        restaurantCreateService = new RestaurantCreateService(restaurantRepository);
        await restaurantCreateService.execute({name, fone, email, address, image, cnpj, city, state});

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
      
     
}

module.exports = RestaurantController;