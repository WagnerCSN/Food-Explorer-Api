const AppError = require("../../utils/AppError");

class PlatesShowService{
    constructor(platesShowRepository){
        this.platesShowRepository = platesShowRepository;
    }

    async execute({id}){
        const selectIngredients = await this.platesShowRepository.searchIngredients(id);
        
        const checkPlatesWithId = await this.platesShowRepository.show(id);

        if(!checkPlatesWithId){
            throw new AppError("There is no plates with this id!");
        }

        const result = [checkPlatesWithId, selectIngredients ];
       
         return result;
    }

}

module.exports = PlatesShowService;