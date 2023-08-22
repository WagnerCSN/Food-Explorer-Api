class PlatesCreateService{
    constructor(platesRepository){
        this.platesRepository = platesRepository;
    }

    async execute({name, description, cost, image, typeOfPlateId, ingredientId}){
        const checkExistPlate = await this.platesRepository.findByName(name);
        const checkExistTypeOfPlate = await this.platesRepository.findByTypePlate(typeOfPlateId);
        const checkExistIngredient = await this.platesRepository.findByIngredient(ingredientId);

        if(checkExistPlate){
            throw new AppError("Exiting plate!");
        }

        if(!checkExistTypeOfPlate){
            throw new AppError("No type of plate registered!");
        }

        if(!checkExistIngredient){
            throw new AppError("No ingredient registered!");
        }

        const plateCreated = await this.platesRepository.create({
            name, 
            description, 
            cost, 
            image
        })

        return plateCreated;
    }
}

module.exports = PlatesCreateService;