const AppError = require("../../utils/AppError");

class BlogCreateService{
    constructor(blogRepository){
        this.blogRepository = blogRepository;
    }

    async execute({name, email, comments, platesId, rating}){
        const checkPlateExist = await this.platesRepository.findByName(platesId);
        const checkUserExist = await this.clientsRepository.findByName(name);
        const checkEmailExist = await this.clientsRepository.findByEmail(email);
        const checkCommentsExist = await this.clientsRepository.findByComments(comments);

        if(checkUserExist&&checkEmailExist) {
            throw new AppError("This dish has already been reviewed by this user!");
        }
        
        if(!checkPlateExist){
            throw new AppError("The plate does not exist!");
        }

        if(!checkCommentsExist){
            throw new AppError("No comment was added!");
        }

        const postCreated = await this.blogRepository.create({
            name, 
            email, 
            comments
        });

        return postCreated;
    }
}

module.exports = BlogCreateService;