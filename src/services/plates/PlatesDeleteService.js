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

        await this.platesDeleteRepository.deletePlates(id);

    }
}
module.exports = PlatesDeleteService;