const AppError = require("../../utils/AppError");

class UsersShowService{
    constructor(usersShowRepository){
        this.usersShowRepository = usersShowRepository;
    }

    async execute({id}){
        const checkUserWithId = await this.usersShowRepository.show(id);

        if(!checkUserWithId){
            throw new AppError("There is no user with this id!");
        }

        return checkUserWithId;
    }

}

module.exports = UsersShowService;