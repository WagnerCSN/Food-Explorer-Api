const AppError = require("../../utils/AppError");

class TypeOfPlatesShowService{
    constructor(typeOfPlatesShowRepository){
        this.typeOfPlatesShowRepository = typeOfPlatesShowRepository;
    }

    async execute({id}){
        const checkTypeOfPlatesWithId = await this.typeOfPlatesShowRepository.show(id);

        if(!checkTypeOfPlatesWithId){
            throw new AppError("There is no type of plates with this id!");
        }

        return checkTypeOfPlatesWithId;
    }

}

module.exports = TypeOfPlatesShowService;