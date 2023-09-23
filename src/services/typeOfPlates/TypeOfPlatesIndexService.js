const AppError = require("../../utils/AppError");

class TypeOfPlatesIndexService{
    constructor(typeOfPlatesIndexRepository){
        this.typeOfPlatesIndexRepository = typeOfPlatesIndexRepository;
    }

    async execute({name}){
        if(name){
            const typeOfPlatesIndexName = await this.typeOfPlatesIndexRepository.indexByName(name);
            if(typeOfPlatesIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            return typeOfPlatesIndexName;
        }
    }
}

module.exports = TypeOfPlatesIndexService;