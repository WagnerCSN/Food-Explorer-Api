const AppError = require("../../utils/AppError");

class UsersDeleteService{
    constructor(usersDeleteRepository){
        this.usersDeleteRepository = usersDeleteRepository;
    }

    async execute({id}){
        const checkUserExist = await this.usersDeleteRepository.findByUser(id);

        if(!checkUserExist){
            throw new AppError("This user is not registered!");
        }
        
        const deletedUser = await this.usersDeleteRepository.delete(id);

        if(deletedUser){
            throw new AppError("Successfully deleted");
        }

    }
}

module.exports = UsersDeleteService;