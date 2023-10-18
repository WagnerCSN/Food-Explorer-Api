const FavoritePlatesRepository = require("../repositories/favoritePlates/FavoritePlatesRepository");
const FavoritePlatesCreateService = require("../services/favoritePlates/FavoritePlatesCreateService");
const FavoritePlatesDeleteRepository = require("../repositories/favoritePlates/FavoritePlatesDeleteRepository");
const FavoritePlatesDeleteService = require("../services/favoritePlates/FavoritePlatesDeleteService");
const FavoritePlatesShowRepository = require("../repositories/favoritePlates/FavoritePlatesShowRepository");
const FavoritePlatesShowService = require("../services/favoritePlates/FavoritePlatesShowService");
const FavoritePlatesIndexRepository = require("../repositories/favoritePlates/FavoritePlatesIndexRepository");
const FavoritePlatesIndexService = require("../services/favoritePlates/FavoritePlatesIndexService");

class FavoritePlatesController{
    async create(request, response) {
     
        const {user_id, plate_id} = request.query;
    
        const favoritePlatesReporitory = new FavoritePlatesRepository();
        const favoritePlatesCreateService = new FavoritePlatesCreateService(favoritePlatesReporitory);
        await favoritePlatesCreateService.execute({user_id, plate_id});
        
        return response.json();
     
    }

    async show(request, response){
        const { user_id } = request.params;
    
        const favoritePlatesShowRepository = new FavoritePlatesShowRepository();
        const favoritePlatesShowService = new FavoritePlatesShowService(favoritePlatesShowRepository);
        const favoritePlateshow = await favoritePlatesShowService.execute({user_id});
       
        return response.json(favoritePlateshow);
    
      }

    async index(request, response){
      const { name_plates } = request.query;
  
      const favoritePlatesIndexRepository = new FavoritePlatesIndexRepository();
      const favoritePlatesIndexService = new FavoritePlatesIndexService(favoritePlatesIndexRepository);
      const favoritePlatesSearch = await favoritePlatesIndexService.execute({name_plates});
      
      return response.json(favoritePlatesSearch);
  
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