const AppError = require("../../utils/AppError");

class BlogIndexService{
    constructor(blogIndexRepository){
        this.blogIndexRepository = blogIndexRepository;
    }

    async execute({rating, plate_name}){

        if(rating){
            const blogIndexName = await this.blogIndexRepository.indexByRating(rating);
            if(blogIndexName.length ===0){
                throw new AppError("Enter a valid rating!");
            }
            
             return blogIndexName;
        }
            
       
        if(plate_name){
            const blogIndexWithPlate = await this.blogIndexRepository.selectByPlate(plate_name);
           
            if(blogIndexWithPlate.length ===0){
                throw new AppError("Enter a valid plate!");
            }

             return blogIndexWithPlate;
        }
    }
}

module.exports = BlogIndexService;