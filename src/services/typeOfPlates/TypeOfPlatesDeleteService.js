const AppError = require("../../utils/AppError");

class TypeOfPlatesDeleteService{
    constructor(typeOfPlatesDeleteRepository){
        this.typeOfPlatesDeleteRepository = typeOfPlatesDeleteRepository;
    }

    async execute({id}){
        const checkTypeOfPlateExist = await this.typeOfPlatesDeleteRepository.findByTypeOfPlate(id);

        if(!checkTypeOfPlateExist){
            throw new AppError("This type of plate does not have!");
        }

        const deletedTypeOfPlate = await this.typeOfPlatesDeleteRepository.deleteTypeOfPlate(id);

        if(deletedTypeOfPlate){
            throw new AppError("Successfully deleted");
        }

    }
}
module.exports = TypeOfPlatesDeleteService;