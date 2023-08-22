class FavoritePlatesController{
    async create(request, response) {
        const { favorite } = request.body;

        favoritePlatesReporitory = new FavoritePlatesRepository();
        favoritePlatesCreateService = new FavoritePlatesCreateService(favoritePlatesReporitory);
        await favoritePlatesCreateService.execute({favorite})

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

module.exports = FavoritePlatesController;