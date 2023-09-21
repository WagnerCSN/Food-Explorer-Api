const AppError = require("../../utils/AppError");

class PlatesDeleteService{
    constructor(platesDeleteRepository){
        this.platesDeleteRepository = platesDeleteRepository;
    }

    async execute({id}){
        const checkPlatesExist = await this.platesDeleteRepository.findByPlates(id);

        if(!checkPlatesExist){
            throw new AppError("This plates does not have!");
        }

        const deletedPlates = await this.platesDeleteRepository.deletePlates(id);

        if(deletedPlates){
            throw new AppError("Successfully deleted");
        }

    }
}
module.exports = PlatesDeleteService;