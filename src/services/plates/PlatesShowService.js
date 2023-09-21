const AppError = require("../../utils/AppError");

class PlatesShowService{
    constructor(platesShowRepository){
        this.platesShowRepository = platesShowRepository;
    }

    async execute({id}){
        const checkPlatesWithId = await this.platesShowRepository.show(id);

        if(!checkPlatesWithId){
            throw new AppError("There is no plates with this id!");
        }

        return checkPlatesWithId;
    }

}

module.exports = PlatesShowService;