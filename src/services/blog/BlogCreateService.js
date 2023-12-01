const AppError = require("../../utils/AppError");

class BlogCreateService{
    constructor(blogRepository){
        this.blogRepository = blogRepository;
    }

    async execute({user_id, title, comments, rating, plate_id}){
        const checkPlateExist = await this.blogRepository.findByPlate(plate_id);
        const checkCommentByPlates = await this.blogRepository.findByCommentByPlate(plate_id);

        if(!checkPlateExist){
            throw new AppError("The plate does not exist!");
        }
        let checkPlateWithCommentsByUser;
        
        if(checkCommentByPlates){
            checkPlateWithCommentsByUser =checkCommentByPlates.map(checkCommentByPlate => {
                if(checkCommentByPlate.user_id===user_id){
                    throw new AppError("This dish has already been reviewed by this user!");
                }});
        }
       
        const postCreated = await this.blogRepository.create({
            user_id, 
            title, 
            comments,
            rating,
            plate_id
        });

        return postCreated;
    }
}

module.exports = BlogCreateService;