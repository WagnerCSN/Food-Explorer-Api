const FavoritePlatesRepository = require("../repositories/favoritePlates/FavoritePlatesRepository");
const FavoritePlatesCreateService = require("../services/favoritePlates/FavoritePlatesCreateService");
const FavoritePlatesDeleteRepository = require("../repositories/favoritePlates/FavoritePlatesDeleteRepository");
const FavoritePlatesDeleteService = require("../services/favoritePlates/FavoritePlatesDeleteService");
const FavoritePlatesIndexRepository = require("../repositories/favoritePlates/FavoritePlatesIndexRepository");
const FavoritePlatesIndexService = require("../services/favoritePlates/FavoritePlatesIndexService");

class FavoritePlatesController{
    async create(request, response) {
        const { favorite } = request.body;
        const { client_id, plate_id} = request.query;
        const favoritePlatesReporitory = new FavoritePlatesRepository();
        const favoritePlatesCreateService = new FavoritePlatesCreateService(favoritePlatesReporitory);
        await favoritePlatesCreateService.execute({favorite, client_id, plate_id})

        response.json();

    }

    async index(request, response){
      const { name_user, name_plates, favorite} = request.query;
  
      const favoritePlatesIndexRepository = new FavoritePlatesIndexRepository();
      const favoritePlatesIndexService = new FavoritePlatesIndexService(favoritePlatesIndexRepository);
      const favoritePlatesSearch = await favoritePlatesIndexService.execute({name_user, name_plates, favorite});
      response.json(favoritePlatesSearch);
  
    }
  
    async delete(request, response){
        const {id} = request.params;
    
        const favoritePlatesDeleteRepository = new FavoritePlatesDeleteRepository();
        const favoritePlatesDeleteService = new FavoritePlatesDeleteService(favoritePlatesDeleteRepository);
        await favoritePlatesDeleteService.execute({id});
    
        return response.json();
      }
}

module.exports = FavoritePlatesController;