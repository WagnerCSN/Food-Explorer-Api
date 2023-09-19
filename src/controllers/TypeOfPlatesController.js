const TypeOfPlatesRepository = require("../repositories/typeOfPlates/typeOfPlatesRepository");
const TypeOfPlatesCreateService = require("../services/typeOfPlates/TypeOfPlatesCreateService");

class TypeOfPlatesController{
    async create(request, response) {
        const { name } = request.body;

        const typeOfPlatesRepository = new TypeOfPlatesRepository();
        const typeOfPlatesCreateService = new TypeOfPlatesCreateService(typeOfPlatesRepository);
        await typeOfPlatesCreateService.execute({name});

        response.json();

    }
  
    // async update(request, response) {
    //     const { name, email, password, old_password } = request.body;
    //     // const id = request.user.id;
    //     const { id } = request.params;
    //     const usersUpdateRepository = new UsersUpdateRepository();
    //     const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
    //     await usersUpdateService.execute({
    //       name,
    //       email,
    //       password,
    //       old_password,
    //       id,
    //     });
    
    //     response.json();
    //   }
      
    //   async delete(request, response){
    //     const {id} = request.params;
    
    //     const usersDeleteRepository = new UsersDeleteRepository();
    //     const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
    //     await usersDeleteService.execute({id});
    
    //     return response.json();
    //   }
}

module.exports = TypeOfPlatesController;