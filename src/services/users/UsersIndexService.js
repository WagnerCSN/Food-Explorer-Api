const AppError = require("../../utils/AppError");

class UsersIndexService{
    constructor(usersIndexRepository){
        this.usersIndexRepository = usersIndexRepository;
    }

    async execute({name, role}){
        if(name){
            const usersIndexName = await this.usersIndexRepository.indexByName(name);
            if(usersIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            return usersIndexName;
        }
            
        if(role){
            const usersIndexRole = await this.usersIndexRepository.indexByRole(role);
            if(usersIndexRole.length ===0){
                throw new AppError("Enter a valid role!");
            }
            return usersIndexRole;
        }
    }
}

module.exports = UsersIndexService;