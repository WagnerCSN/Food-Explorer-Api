const AppError = require("../../utils/AppError");

class BlogCreateService{
    constructor(blogRepository){
        this.blogRepository = blogRepository;
    }

    async execute({name, email, comments, plate_id, rating}){
        const checkPlateExist = await this.blogRepository.findByPlate(plate_id);
        const checkEmailExist = await this.blogRepository.findByEmail(email);
        const checkUserExist = await this.blogRepository.findByName(name);
        const checkCommentByPlate = await this.blogRepository.findByCommentByPlate(plate_id);


        if(!checkPlateExist){
            throw new AppError("The plate does not exist!");
        }

        const checkPlateWithCommentsByUser = checkCommentByPlate&&checkUserExist&&checkEmailExist||checkCommentByPlate&&checkEmailExist;

        if(checkPlateWithCommentsByUser) {
            throw new AppError("This dish has already been reviewed by this user!");
        }
        
        const postCreated = await this.blogRepository.create({
            name, 
            email, 
            comments,
            rating,
            plate_id
        });

        return postCreated;
    }
}

module.exports = BlogCreateService;