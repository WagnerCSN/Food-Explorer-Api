const AppError = require("../../utils/AppError");

class TypeOfPlatesCreateService{
    constructor(typeOfPlatesRepository){
        this.typeOfPlatesRepository = typeOfPlatesRepository;
    }

    async create({name}){
        const checkTypePlateExist = await this.typeOfPlatesRepository.findByName(name);

        if(checkTypePlateExist){
            throw new AppError("Existing plate type!");
        }

        const typePlateCreated = await this.typeOfPlatesRepository.create({
            name
        })

        return typePlateCreated;
    }
}

module.exports = TypeOfPlatesCreateService;
