const AppError = require("../../utils/AppError");

class BlogCreateService{
    constructor(blogRepository){
        this.blogRepository = blogRepository;
    }

    async execute({name, email, comments, plate_id, rating}){
        const checkPlateExist = await this.blogRepository.findByPlate(plate_id);
        const checkCommentByPlates = await this.blogRepository.findByCommentByPlate(plate_id);

        if(!checkPlateExist){
            throw new AppError("The plate does not exist!");
        }
        let checkPlateWithCommentsByUser;
        
        if(checkCommentByPlates){
            checkPlateWithCommentsByUser =checkCommentByPlates.map(checkCommentByPlate => {
                if(checkCommentByPlate.email===email){
                    throw new AppError("This dish has already been reviewed by this user!");
                }});
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