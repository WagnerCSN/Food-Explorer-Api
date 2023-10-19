const AppError = require("../../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionsCreateService{
    constructor(sessionsRepository){
        this.sessionsRepository = sessionsRepository;
    }

    async execute({email, password}){
    
        const user = await this.sessionsRepository.findByUser(email);
        
       
        if(!user){
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }
    
        const havePassword = await compare(password, user.password);
    
        if(!havePassword){
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }
    
        const { secret, expiresIn } = authConfig.jwt;
    
        const token = sign({role: user.role}, secret, {
            subject: String(user.id),
            expiresIn   
        });

        response.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 15*60*1000,
        })

        delete user.password;

        return (user);
    }
}
module.exports = SessionsCreateService;
