const AppError = require("../../utils/AppError");

class UsersDeleteService{
    constructor(usersDeleteRepository){
        this.usersDeleteRepository = usersDeleteRepository;
    }

    async execute({id}){
        
        await this.usersDeleteRepository.delete(id);
    }
}

module.exports = UsersDeleteService;