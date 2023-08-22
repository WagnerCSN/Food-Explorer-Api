const { hash } = require("bcryptjs");
const AppError = require("../../utils/AppError");

class AdministratorCreateService{
    constructor(administratorRepository){
        this.administratorRepository = administratorRepository;
    }

    async execute(name, isAdmin, password, email){
            const hashedpassword = await hash(password, 8)
            const checkExistEmail = await this.administratorRepository.findByEmail(email);
            const checkExistUser = await this.administratorRepository.findByName(name);
            const checkIsAdmin = await this.administratorRepository.findByIsAdmin(isAdmin);

            if(checkExistEmail){
                throw new AppError("Email not allowed")
            }

            if(checkExistUser){
                throw new AppError("User already exists!")
            }

  ------->          if(!checkIsAdmin){
                throw new AppError("")
            }

            const administratorCreated = await this.administratorRepository.create({
                name, 
                isAdmin, 
                password: hashedpassword, 
                email
            })

            return administratorCreated;
    }
}

module.exports = AdministratorCreateService;